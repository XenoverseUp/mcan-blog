/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "PostMeta" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "publication" "Publication" NOT NULL,
    "type" "PostType",
    "previewUrl" TEXT,
    "repository" TEXT,
    "references" TEXT[],
    "externalLinks" TEXT[],

    CONSTRAINT "PostMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostContent" (
    "id" SERIAL NOT NULL,
    "postMetaId" INTEGER NOT NULL,

    CONSTRAINT "PostContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PostMeta_slug_key" ON "PostMeta"("slug");

-- CreateIndex
CREATE INDEX "PostMeta_slug_idx" ON "PostMeta"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PostContent_id_key" ON "PostContent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PostContent_postMetaId_key" ON "PostContent"("postMetaId");

-- AddForeignKey
ALTER TABLE "PostContent" ADD CONSTRAINT "PostContent_postMetaId_fkey" FOREIGN KEY ("postMetaId") REFERENCES "PostMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
