-- CreateEnum
CREATE TYPE "Publication" AS ENUM ('OPINIONS', 'TUTORIALS');

-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('EASY', 'MEDIUM', 'CHALLENGING', 'CONTROVERSIAL', 'SUGGESTION');

-- CreateEnum
CREATE TYPE "SnippetType" AS ENUM ('REACT', 'VANILLA_JS', 'CSS', 'SASS');

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "title" VARCHAR(256) NOT NULL,
    "subtitle" TEXT NOT NULL,
    "coverImage" TEXT,
    "publication" "Publication" NOT NULL,
    "type" "PostType" NOT NULL,
    "previewUrl" VARCHAR(256),
    "repositoryUrl" VARCHAR(256),
    "references" TEXT[],
    "externalLinks" TEXT[],
    "view" INTEGER NOT NULL DEFAULT 0,
    "wordCount" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostContent" (
    "id" SERIAL NOT NULL,
    "markdown" TEXT NOT NULL,
    "metaId" INTEGER NOT NULL,

    CONSTRAINT "PostContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Snippet" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "slug" VARCHAR(256) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "SnippetType" NOT NULL,
    "view" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Snippet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SnippetContent" (
    "id" SERIAL NOT NULL,
    "markdown" TEXT NOT NULL,
    "metaId" INTEGER NOT NULL,

    CONSTRAINT "SnippetContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_slug_idx" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PostContent_id_key" ON "PostContent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PostContent_metaId_key" ON "PostContent"("metaId");

-- CreateIndex
CREATE UNIQUE INDEX "Snippet_slug_key" ON "Snippet"("slug");

-- CreateIndex
CREATE INDEX "Snippet_slug_idx" ON "Snippet"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SnippetContent_id_key" ON "SnippetContent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SnippetContent_metaId_key" ON "SnippetContent"("metaId");

-- AddForeignKey
ALTER TABLE "PostContent" ADD CONSTRAINT "PostContent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SnippetContent" ADD CONSTRAINT "SnippetContent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
