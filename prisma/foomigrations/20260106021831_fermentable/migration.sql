-- CreateEnum
CREATE TYPE "FermentableType" AS ENUM ('Grain', 'Extract', 'Sugar', 'Adjunct', 'DryExtract', 'Fruit', 'Juice', 'Honey');

-- CreateEnum
CREATE TYPE "IngredientUsage" AS ENUM ('Mash', 'Boil', 'Steep', 'Whirlpool', 'DryHop', 'Primary', 'Secondary', 'Bottling', 'Sparge');

-- CreateTable
CREATE TABLE "Fermentable" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "notes" TEXT,
    "manufacturer" TEXT,
    "country" TEXT,
    "price" DOUBLE PRECISION,
    "type" "FermentableType" DEFAULT 'Grain',
    "power" DOUBLE PRECISION,
    "maxUsage" DOUBLE PRECISION,
    "color" DOUBLE PRECISION,
    "potential" DOUBLE PRECISION,
    "moisture" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "coarseFineDiff" DOUBLE PRECISION,
    "extract" DOUBLE PRECISION,
    "friability" DOUBLE PRECISION,
    "yield" DOUBLE PRECISION,
    "stability" TEXT,
    "userId" TEXT,
    "usage" "IngredientUsage" DEFAULT 'Mash',

    CONSTRAINT "Fermentable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fermentable_id_key" ON "Fermentable"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fermentable_slug_key" ON "Fermentable"("slug");

-- AddForeignKey
ALTER TABLE "Fermentable" ADD CONSTRAINT "Fermentable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
