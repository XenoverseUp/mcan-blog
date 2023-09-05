/*
  Warnings:

  - You are about to drop the column `content` on the `PostMeta` table. All the data in the column will be lost.
  - Added the required column `content` to the `PostContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `PostMeta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostContent" ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PostMeta" DROP COLUMN "content",
ADD COLUMN     "subtitle" VARCHAR(255) NOT NULL;
