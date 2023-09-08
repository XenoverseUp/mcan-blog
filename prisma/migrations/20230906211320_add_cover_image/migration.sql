/*
  Warnings:

  - You are about to drop the column `repository` on the `PostMeta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PostMeta" DROP COLUMN "repository",
ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "repositoryUrl" TEXT,
ALTER COLUMN "subtitle" SET DATA TYPE TEXT;
