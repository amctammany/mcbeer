/*
  Warnings:

  - You are about to drop the column `attentuation` on the `YeastIngredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "YeastIngredient" DROP COLUMN "attentuation",
ADD COLUMN     "attenuation" DOUBLE PRECISION;
