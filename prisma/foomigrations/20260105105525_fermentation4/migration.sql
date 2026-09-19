/*
  Warnings:

  - A unique constraint covering the columns `[fermentationProfileId,index]` on the table `FermentationStep` will be added. If there are existing duplicate values, this will fail.
  - Made the column `fermentationProfileId` on table `FermentationStep` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "FermentationStep" DROP CONSTRAINT "FermentationStep_fermentationProfileId_fkey";

-- AlterTable
ALTER TABLE "FermentationStep" ALTER COLUMN "fermentationProfileId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FermentationStep_fermentationProfileId_index_key" ON "FermentationStep"("fermentationProfileId", "index");

-- AddForeignKey
ALTER TABLE "FermentationStep" ADD CONSTRAINT "FermentationStep_fermentationProfileId_fkey" FOREIGN KEY ("fermentationProfileId") REFERENCES "FermentationProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
