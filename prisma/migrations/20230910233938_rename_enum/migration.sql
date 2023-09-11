/*
  Warnings:

  - The values [OPINION,TUTORIAL,SNIPPET] on the enum `Publication` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Publication_new" AS ENUM ('OPINIONS', 'TUTORIALS', 'SNIPPETS');
ALTER TABLE "Post" ALTER COLUMN "publication" TYPE "Publication_new" USING ("publication"::text::"Publication_new");
ALTER TYPE "Publication" RENAME TO "Publication_old";
ALTER TYPE "Publication_new" RENAME TO "Publication";
DROP TYPE "Publication_old";
COMMIT;
