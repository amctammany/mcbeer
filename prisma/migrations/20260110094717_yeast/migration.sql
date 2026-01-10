-- CreateEnum
CREATE TYPE "YeastForm" AS ENUM ('Liquid', 'Dry');

-- CreateEnum
CREATE TYPE "YeastFlocculation" AS ENUM ('VeryHigh', 'High', 'Medium', 'Low', 'VeryLow');

-- CreateEnum
CREATE TYPE "YeastType" AS ENUM ('Ale', 'Lager', 'Wheat', 'Wine');

-- CreateTable
CREATE TABLE "Yeast" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "usage" TEXT,
    "description" TEXT,
    "notes" TEXT,
    "manufacturer" TEXT,
    "type" "YeastType",
    "form" "YeastForm",
    "price" DOUBLE PRECISION,
    "tempLow" DOUBLE PRECISION,
    "tempHigh" DOUBLE PRECISION,
    "flocculation" "YeastFlocculation",
    "tolerance" DOUBLE PRECISION,
    "attenuation" DOUBLE PRECISION,
    "attenuationLow" DOUBLE PRECISION,
    "attenuationHigh" DOUBLE PRECISION,
    "cellsPerUnit" DOUBLE PRECISION,
    "productId" TEXT,
    "userId" TEXT,
    "diastatic" BOOLEAN DEFAULT false,

    CONSTRAINT "Yeast_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Yeast_id_key" ON "Yeast"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Yeast_slug_key" ON "Yeast"("slug");

-- AddForeignKey
ALTER TABLE "Yeast" ADD CONSTRAINT "Yeast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
