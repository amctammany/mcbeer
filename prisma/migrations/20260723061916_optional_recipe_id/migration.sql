/*
  Warnings:

  - The primary key for the `FermentableIngredient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `HopIngredient` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "FermentableIngredient" DROP CONSTRAINT "FermentableIngredient_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "HopIngredient" DROP CONSTRAINT "HopIngredient_recipeId_fkey";

-- AlterTable
ALTER TABLE "FermentableIngredient" DROP CONSTRAINT "FermentableIngredient_pkey",
ALTER COLUMN "recipeId" DROP NOT NULL,
ADD CONSTRAINT "FermentableIngredient_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HopIngredient" DROP CONSTRAINT "HopIngredient_pkey",
ALTER COLUMN "recipeId" DROP NOT NULL,
ADD CONSTRAINT "HopIngredient_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "HopIngredient" ADD CONSTRAINT "HopIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableIngredient" ADD CONSTRAINT "FermentableIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
