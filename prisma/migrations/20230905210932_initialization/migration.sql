-- CreateEnum
CREATE TYPE "Publication" AS ENUM ('OPINION', 'TUTORIAL', 'SNIPPET');

-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('EASY', 'MEDIUM', 'CHALLENGING', 'CONTROVERSIAL', 'SUGGESTION');

-- CreateTable
CREATE TABLE "Post" (
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

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_slug_idx" ON "Post"("slug");
