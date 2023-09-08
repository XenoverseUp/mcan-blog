/*
  Warnings:

  - You are about to drop the `PostMeta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostContent" DROP CONSTRAINT "PostContent_metaId_fkey";

-- DropTable
DROP TABLE "PostMeta";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "title" VARCHAR(255) NOT NULL,
    "subtitle" TEXT NOT NULL,
    "coverImage" TEXT,
    "publication" "Publication" NOT NULL,
    "type" "PostType",
    "previewUrl" VARCHAR(255),
    "repositoryUrl" VARCHAR(255),
    "references" TEXT[],
    "externalLinks" TEXT[],
    "view" INTEGER NOT NULL DEFAULT 0,
    "wordCount" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_slug_idx" ON "Post"("slug");

-- AddForeignKey
ALTER TABLE "PostContent" ADD CONSTRAINT "PostContent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
