/*
  Warnings:

  - Added the required column `index` to the `FermentationStep` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FermentationStep" ADD COLUMN     "index" INTEGER NOT NULL;
