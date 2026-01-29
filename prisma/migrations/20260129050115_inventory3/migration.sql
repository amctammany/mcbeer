/*
  Warnings:

  - Added the required column `name` to the `HopInventoryItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HopInventoryItem" DROP CONSTRAINT "HopInventoryItem_hopId_fkey";

-- AlterTable
ALTER TABLE "HopInventoryItem" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "hopId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "HopInventoryItem" ADD CONSTRAINT "HopInventoryItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Hop"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
