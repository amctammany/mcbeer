/*
  Warnings:

  - The primary key for the `BreweryUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[breweryId,userId]` on the table `BreweryUser` will be added. If there are existing duplicate values, this will fail.
  - The required column `ident` was added to the `BreweryUser` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "BreweryUser" DROP CONSTRAINT "BreweryUser_pkey",
ADD COLUMN     "ident" TEXT NOT NULL,
ADD CONSTRAINT "BreweryUser_pkey" PRIMARY KEY ("ident");

-- CreateIndex
CREATE UNIQUE INDEX "BreweryUser_breweryId_userId_key" ON "BreweryUser"("breweryId", "userId");
