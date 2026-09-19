-- CreateEnum
CREATE TYPE "HopUsage" AS ENUM ('aroma', 'bittering', 'dual');

-- CreateTable
CREATE TABLE "Hop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "characteristics" TEXT,
    "country" TEXT,
    "usage" "HopUsage",
    "alpha" DOUBLE PRECISION,
    "alphaLow" DOUBLE PRECISION,
    "alphaHigh" DOUBLE PRECISION,
    "beta" DOUBLE PRECISION,
    "betaLow" DOUBLE PRECISION,
    "betaHigh" DOUBLE PRECISION,
    "caryophyllene" DOUBLE PRECISION,
    "caryophylleneLow" DOUBLE PRECISION,
    "caryophylleneHigh" DOUBLE PRECISION,
    "cohumulone" DOUBLE PRECISION,
    "cohumuloneLow" DOUBLE PRECISION,
    "cohumuloneHigh" DOUBLE PRECISION,
    "farnesene" DOUBLE PRECISION,
    "farneseneLow" DOUBLE PRECISION,
    "farneseneHigh" DOUBLE PRECISION,
    "humulene" DOUBLE PRECISION,
    "humuleneLow" DOUBLE PRECISION,
    "humuleneHigh" DOUBLE PRECISION,
    "myrcene" DOUBLE PRECISION,
    "myrceneLow" DOUBLE PRECISION,
    "myrceneHigh" DOUBLE PRECISION,
    "totalOil" DOUBLE PRECISION,
    "totalOilLow" DOUBLE PRECISION,
    "totalOilHigh" DOUBLE PRECISION,
    "geraniol" DOUBLE PRECISION,
    "geraniolLow" DOUBLE PRECISION,
    "geraniolHigh" DOUBLE PRECISION,
    "other" DOUBLE PRECISION,
    "otherLow" DOUBLE PRECISION,
    "otherHigh" DOUBLE PRECISION,
    "linalool" DOUBLE PRECISION,
    "linaloolLow" DOUBLE PRECISION,
    "linaloolHigh" DOUBLE PRECISION,
    "bPinene" DOUBLE PRECISION,
    "bPineneLow" DOUBLE PRECISION,
    "bPineneHigh" DOUBLE PRECISION,
    "purpose" TEXT,
    "flavor" TEXT,
    "notes" TEXT,
    "substitutesString" TEXT[],
    "styles" TEXT[],
    "userId" TEXT,

    CONSTRAINT "Hop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hop_slug_key" ON "Hop"("slug");

-- AddForeignKey
ALTER TABLE "Hop" ADD CONSTRAINT "Hop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
