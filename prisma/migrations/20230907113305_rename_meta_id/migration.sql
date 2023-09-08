/*
  Warnings:

  - You are about to drop the column `postMetaId` on the `PostContent` table. All the data in the column will be lost.
  - You are about to alter the column `previewUrl` on the `PostMeta` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `repositoryUrl` on the `PostMeta` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[metaId]` on the table `PostContent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metaId` to the `PostContent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PostContent" DROP CONSTRAINT "PostContent_postMetaId_fkey";

-- DropIndex
DROP INDEX "PostContent_postMetaId_key";

-- AlterTable
ALTER TABLE "PostContent" DROP COLUMN "postMetaId",
ADD COLUMN     "metaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PostMeta" ALTER COLUMN "previewUrl" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "repositoryUrl" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "PostContent_metaId_key" ON "PostContent"("metaId");

-- AddForeignKey
ALTER TABLE "PostContent" ADD CONSTRAINT "PostContent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "PostMeta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
