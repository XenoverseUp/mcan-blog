-- DropForeignKey
ALTER TABLE "PostContent" DROP CONSTRAINT "PostContent_metaId_fkey";

-- AddForeignKey
ALTER TABLE "PostContent" ADD CONSTRAINT "PostContent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
