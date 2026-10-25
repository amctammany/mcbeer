-- CreateTable
CREATE TABLE "RecipeFolder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" TEXT,
    "breweryId" TEXT NOT NULL,

    CONSTRAINT "RecipeFolder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipeFolder" ADD CONSTRAINT "RecipeFolder_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "RecipeFolder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeFolder" ADD CONSTRAINT "RecipeFolder_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
