-- CreateEnum
CREATE TYPE "HopIngredientUsage" AS ENUM ('Boil', 'Whirlpool', 'DryHop', 'Mash');

-- CreateEnum
CREATE TYPE "HopIngredientType" AS ENUM ('Pellet', 'Cryo', 'Whole', 'Extract');

-- CreateEnum
CREATE TYPE "FermentableIngredientUsage" AS ENUM ('Mash', 'Extract', 'Steep', 'Late');

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "equipmentProfileId" TEXT,
    "batchVolume" DOUBLE PRECISION DEFAULT 22,
    "boilVolume" DOUBLE PRECISION DEFAULT 25,
    "preboilVolume" DOUBLE PRECISION DEFAULT 25,
    "boilTime" DOUBLE PRECISION DEFAULT 60,
    "brewEfficiency" DOUBLE PRECISION DEFAULT 0.6,
    "mashEfficiency" DOUBLE PRECISION DEFAULT 0.7,
    "boilOffRate" DOUBLE PRECISION DEFAULT 2,
    "trubLoss" DOUBLE PRECISION DEFAULT 0,
    "mashLoss" DOUBLE PRECISION DEFAULT 0,
    "fermenterLoss" DOUBLE PRECISION DEFAULT 0,
    "grainAbsorption" DOUBLE PRECISION DEFAULT 0.5,
    "mashProfileId" TEXT,
    "ownerUsername" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "forkedFrom" TEXT,
    "styleIdentifier" TEXT,
    "styleId" INTEGER,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HopIngredient" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "usage" "HopIngredientUsage" NOT NULL,
    "amountType" "MassUnit" NOT NULL,
    "temperature" DOUBLE PRECISION,
    "type" "HopIngredientType" NOT NULL DEFAULT 'Pellet',
    "duration" DOUBLE PRECISION NOT NULL,
    "durationType" "TimeUnit" NOT NULL,
    "hopId" TEXT NOT NULL,
    "alpha" DOUBLE PRECISION,

    CONSTRAINT "HopIngredient_pkey" PRIMARY KEY ("recipeId","id")
);

-- CreateTable
CREATE TABLE "FermentableIngredient" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "usage" "FermentableIngredientUsage" NOT NULL DEFAULT 'Mash',
    "amount" DOUBLE PRECISION NOT NULL,
    "amountType" "MassUnit" NOT NULL,
    "fermentableId" TEXT NOT NULL,
    "color" DOUBLE PRECISION,
    "potential" DOUBLE PRECISION,

    CONSTRAINT "FermentableIngredient_pkey" PRIMARY KEY ("recipeId","id")
);

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_equipmentProfileId_fkey" FOREIGN KEY ("equipmentProfileId") REFERENCES "EquipmentProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_mashProfileId_fkey" FOREIGN KEY ("mashProfileId") REFERENCES "MashProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopIngredient" ADD CONSTRAINT "HopIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopIngredient" ADD CONSTRAINT "HopIngredient_hopId_fkey" FOREIGN KEY ("hopId") REFERENCES "Hop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableIngredient" ADD CONSTRAINT "FermentableIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableIngredient" ADD CONSTRAINT "FermentableIngredient_fermentableId_fkey" FOREIGN KEY ("fermentableId") REFERENCES "Fermentable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
