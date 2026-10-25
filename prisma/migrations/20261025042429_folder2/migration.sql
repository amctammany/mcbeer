/*
  Warnings:

  - Added the required column `pathname` to the `RecipeFolder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "recipeFolderId" TEXT;

-- AlterTable
ALTER TABLE "RecipeFolder" ADD COLUMN     "pathname" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_recipeFolderId_fkey" FOREIGN KEY ("recipeFolderId") REFERENCES "RecipeFolder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
