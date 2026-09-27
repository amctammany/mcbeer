/*
  Warnings:

  - You are about to drop the `RecipeFermentationStep` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeMashStep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecipeFermentationStep" DROP CONSTRAINT "RecipeFermentationStep_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeMashStep" DROP CONSTRAINT "RecipeMashStep_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "equipmentProfileDiff" JSONB,
ADD COLUMN     "fermentationProfileDiff" JSONB,
ADD COLUMN     "mashProfileDiff" JSONB,
ADD COLUMN     "waterProfileDiff" JSONB;

-- DropTable
DROP TABLE "RecipeFermentationStep";

-- DropTable
DROP TABLE "RecipeMashStep";
