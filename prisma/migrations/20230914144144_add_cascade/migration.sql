-- DropForeignKey
ALTER TABLE "SnippetContent" DROP CONSTRAINT "SnippetContent_metaId_fkey";

-- AddForeignKey
ALTER TABLE "SnippetContent" ADD CONSTRAINT "SnippetContent_metaId_fkey" FOREIGN KEY ("metaId") REFERENCES "Snippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
