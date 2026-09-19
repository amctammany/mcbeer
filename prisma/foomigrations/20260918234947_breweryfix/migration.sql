/*
  Warnings:

  - The primary key for the `BreweryUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `BreweryUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Batch" DROP CONSTRAINT "Batch_brewerId_fkey";

-- AlterTable
ALTER TABLE "BreweryUser" DROP CONSTRAINT "BreweryUser_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "BreweryUser_pkey" PRIMARY KEY ("breweryId", "userId");

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_breweryId_brewerId_fkey" FOREIGN KEY ("breweryId", "brewerId") REFERENCES "BreweryUser"("breweryId", "userId") ON DELETE RESTRICT ON UPDATE CASCADE;
