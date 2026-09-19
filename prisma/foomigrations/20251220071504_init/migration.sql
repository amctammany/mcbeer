-- CreateEnum
CREATE TYPE "StyleCategory" AS ENUM ('beer', 'mead', 'cider');

-- CreateTable
CREATE TABLE "Style" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" "StyleCategory" NOT NULL,
    "subcategoryId" INTEGER NOT NULL,
    "identifier" TEXT NOT NULL,
    "overall" TEXT,
    "aroma" TEXT,
    "appearance" TEXT,
    "flavor" TEXT,
    "mouthfeel" TEXT,
    "comments" TEXT,
    "history" TEXT,
    "ingredients" TEXT,
    "comparison" TEXT,
    "examples" TEXT,
    "ibuLow" DOUBLE PRECISION,
    "ibuHigh" DOUBLE PRECISION,
    "ibuFlex" BOOLEAN NOT NULL DEFAULT false,
    "ogLow" DOUBLE PRECISION,
    "ogHigh" DOUBLE PRECISION,
    "ogFlex" BOOLEAN NOT NULL DEFAULT false,
    "fgLow" DOUBLE PRECISION,
    "fgHigh" DOUBLE PRECISION,
    "fgFlex" BOOLEAN NOT NULL DEFAULT false,
    "srmLow" DOUBLE PRECISION,
    "srmHigh" DOUBLE PRECISION,
    "srmFlex" BOOLEAN NOT NULL DEFAULT false,
    "abvLow" DOUBLE PRECISION,
    "abvHigh" DOUBLE PRECISION,
    "abvFlex" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Style_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Style_slug_key" ON "Style"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Style_identifier_key" ON "Style"("identifier");
