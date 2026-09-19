/*
  Warnings:

  - Added the required column `name` to the `FermentableInventoryItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `YeastInventoryItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FermentableInventoryItem" DROP CONSTRAINT "FermentableInventoryItem_fermentableId_fkey";

-- DropForeignKey
ALTER TABLE "YeastInventoryItem" DROP CONSTRAINT "YeastInventoryItem_yeastId_fkey";

-- AlterTable
ALTER TABLE "FermentableInventoryItem" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "fermentableId" DROP NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "HopInventoryItem" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "YeastInventoryItem" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "yeastId" DROP NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "YeastInventoryItem" ADD CONSTRAINT "YeastInventoryItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Yeast"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableInventoryItem" ADD CONSTRAINT "FermentableInventoryItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Fermentable"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
