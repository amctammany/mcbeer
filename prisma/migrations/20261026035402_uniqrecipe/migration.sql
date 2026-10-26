/*
  Warnings:

  - A unique constraint covering the columns `[name,recipeFolderId]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pathname,breweryId]` on the table `RecipeFolder` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recipe_name_recipeFolderId_key" ON "Recipe"("name", "recipeFolderId");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeFolder_pathname_breweryId_key" ON "RecipeFolder"("pathname", "breweryId");
