-- CreateEnum
CREATE TYPE "VesselType" AS ENUM ('MashTun', 'LauterTun', 'Kettle', 'Fermenter', 'BriteTank', 'HotLiquorTank');

-- CreateEnum
CREATE TYPE "BreweryUserRoles" AS ENUM ('OWNER', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "StyleCategory" AS ENUM ('beer', 'mead', 'cider');

-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('SUPERUSER', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "MassSystem" AS ENUM ('US', 'Imperial', 'Metric');

-- CreateEnum
CREATE TYPE "MassUnit" AS ENUM ('Oz', 'Lb', 'LbOz', 'g', 'Kg');

-- CreateEnum
CREATE TYPE "FlowUnit" AS ENUM ('gpm', 'lpm');

-- CreateEnum
CREATE TYPE "ConcentrationUnit" AS ENUM ('ppm', 'ppb');

-- CreateEnum
CREATE TYPE "TimeUnit" AS ENUM ('min', 'hr', 'days');

-- CreateEnum
CREATE TYPE "PercentUnit" AS ENUM ('number', 'percent');

-- CreateEnum
CREATE TYPE "UserVolumePreference" AS ENUM ('L', 'gal', 'bbl');

-- CreateEnum
CREATE TYPE "UserMassPreference" AS ENUM ('g', 'LbOz', 'Lb', 'Oz', 'Kg');

-- CreateEnum
CREATE TYPE "UserPressurePreference" AS ENUM ('PSI', 'kPa', 'bar');

-- CreateEnum
CREATE TYPE "UserEnergyPreference" AS ENUM ('kJ', 'kcal');

-- CreateEnum
CREATE TYPE "UserTemperaturePreference" AS ENUM ('F', 'C');

-- CreateEnum
CREATE TYPE "UserGravityPreference" AS ENUM ('SG', 'Brix', 'Plato', 'nD', 'GCM3', 'PPG');

-- CreateEnum
CREATE TYPE "UserColorPreference" AS ENUM ('L', 'EBC', 'SRM');

-- CreateEnum
CREATE TYPE "MashSpargeWaterCalculations" AS ENUM ('Default', 'BatchSparge', 'NoSparge', 'IgnoreExpansion');

-- CreateEnum
CREATE TYPE "MashStepType" AS ENUM ('temperature', 'infusion', 'decoction');

-- CreateEnum
CREATE TYPE "FermentationStepType" AS ENUM ('primary', 'secondary', 'tertiary', 'coldcrash', 'conditioning');

-- CreateEnum
CREATE TYPE "FermentableType" AS ENUM ('Grain', 'Extract', 'Sugar', 'Adjunct', 'DryExtract', 'Fruit', 'Juice', 'Honey');

-- CreateEnum
CREATE TYPE "IngredientUsage" AS ENUM ('Mash', 'Boil', 'Steep', 'Whirlpool', 'DryHop', 'Primary', 'Secondary', 'Bottling', 'Sparge');

-- CreateEnum
CREATE TYPE "HopUsage" AS ENUM ('aroma', 'bittering', 'dual');

-- CreateEnum
CREATE TYPE "YeastForm" AS ENUM ('Liquid', 'Dry');

-- CreateEnum
CREATE TYPE "YeastFlocculation" AS ENUM ('VeryHigh', 'High', 'Medium', 'Low', 'VeryLow');

-- CreateEnum
CREATE TYPE "YeastType" AS ENUM ('Ale', 'Lager', 'Wheat', 'Wine');

-- CreateEnum
CREATE TYPE "HopIngredientUsage" AS ENUM ('Boil', 'Whirlpool', 'DryHop', 'Mash');

-- CreateEnum
CREATE TYPE "HopIngredientType" AS ENUM ('Pellet', 'Cryo', 'Whole', 'Extract');

-- CreateEnum
CREATE TYPE "FermentableIngredientUsage" AS ENUM ('Mash', 'Extract', 'Steep', 'Late');

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

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "language" TEXT NOT NULL DEFAULT 'en',
    "timezone" TEXT,
    "fontSize" TEXT NOT NULL DEFAULT 'medium',
    "massSystem" "MassSystem" NOT NULL DEFAULT 'US',
    "color" "UserColorPreference" NOT NULL DEFAULT 'L',
    "flow" "FlowUnit" NOT NULL DEFAULT 'gpm',
    "concentration" "ConcentrationUnit" NOT NULL DEFAULT 'ppm',
    "time" "TimeUnit" NOT NULL DEFAULT 'min',
    "percent" "PercentUnit" NOT NULL DEFAULT 'percent',
    "volume" "UserVolumePreference" NOT NULL DEFAULT 'gal',
    "mass" "UserMassPreference" NOT NULL DEFAULT 'LbOz',
    "hopMass" "UserMassPreference" NOT NULL DEFAULT 'Oz',
    "fermentableMass" "UserMassPreference" NOT NULL DEFAULT 'Lb',
    "yeastMass" "UserMassPreference" NOT NULL DEFAULT 'g',
    "gravity" "UserGravityPreference" NOT NULL DEFAULT 'SG',
    "temperature" "UserTemperaturePreference" NOT NULL DEFAULT 'F',
    "pressure" "UserPressurePreference" NOT NULL DEFAULT 'PSI',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "defaultBreweryId" TEXT,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "displayUsername" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "role" "UserRoles" DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "id" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "userId" TEXT NOT NULL,
    "scope" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "password" TEXT,
    "id" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentProfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "batchVolume" DOUBLE PRECISION,
    "boilVolume" DOUBLE PRECISION,
    "preboilVolume" DOUBLE PRECISION,
    "boilTime" DOUBLE PRECISION,
    "brewEfficiency" DOUBLE PRECISION,
    "mashEfficiency" DOUBLE PRECISION,
    "boilOffRate" DOUBLE PRECISION,
    "trubLoss" DOUBLE PRECISION DEFAULT 0,
    "mashLoss" DOUBLE PRECISION DEFAULT 0,
    "fermenterLoss" DOUBLE PRECISION DEFAULT 0,
    "grainAbsorption" DOUBLE PRECISION DEFAULT 0.5,
    "waterGrainRatio" DOUBLE PRECISION DEFAULT 1.5,
    "mashTunVolume" DOUBLE PRECISION DEFAULT 100,
    "mashTunWeight" DOUBLE PRECISION DEFAULT 100,
    "mashTunSpecificHeat" DOUBLE PRECISION DEFAULT 0.12,
    "mashTunDeadSpace" DOUBLE PRECISION DEFAULT 0,
    "waterCalculationMethod" "MashSpargeWaterCalculations" NOT NULL DEFAULT 'Default',
    "boilExpansion" DOUBLE PRECISION DEFAULT 0.04,
    "fermenterTopOff" DOUBLE PRECISION DEFAULT 0,
    "forkedFrom" TEXT,
    "userId" TEXT,

    CONSTRAINT "EquipmentProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "calcium" INTEGER DEFAULT 0,
    "magnesium" INTEGER DEFAULT 0,
    "sodium" INTEGER DEFAULT 0,
    "chloride" INTEGER DEFAULT 0,
    "sulfate" INTEGER DEFAULT 0,
    "bicarbonate" INTEGER DEFAULT 0,
    "description" TEXT,
    "forkedFrom" TEXT,

    CONSTRAINT "WaterProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MashProfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "spargeTemp" DOUBLE PRECISION NOT NULL DEFAULT 168,
    "grainTemp" DOUBLE PRECISION NOT NULL DEFAULT 72,
    "grainWeightBasis" DOUBLE PRECISION DEFAULT 10,
    "mashPh" DOUBLE PRECISION DEFAULT 5.4,
    "mashTunTemp" DOUBLE PRECISION NOT NULL DEFAULT 72,
    "description" TEXT,
    "userId" TEXT,
    "forkedFrom" TEXT,

    CONSTRAINT "MashProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MashStep" (
    "id" SERIAL NOT NULL,
    "type" "MashStepType" DEFAULT 'temperature',
    "name" TEXT,
    "temperature" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "rampTime" INTEGER DEFAULT 0,
    "index" INTEGER NOT NULL,
    "mashProfileId" TEXT NOT NULL,

    CONSTRAINT "MashStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FermentationProfile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT,
    "forkedFrom" TEXT,

    CONSTRAINT "FermentationProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FermentationStep" (
    "type" "FermentationStepType" NOT NULL DEFAULT 'primary',
    "name" TEXT,
    "temperature" DOUBLE PRECISION NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "rampTime" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fermentationProfileId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "FermentationStep_pkey" PRIMARY KEY ("id")
);

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
    "forkedFrom" TEXT,

    CONSTRAINT "Fermentable_pkey" PRIMARY KEY ("id")
);

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
    "country" TEXT,

    CONSTRAINT "Yeast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HopInventoryItem" (
    "id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "hopId" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "HopInventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YeastInventoryItem" (
    "id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "yeastId" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "YeastInventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FermentableInventoryItem" (
    "id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "fermentableId" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FermentableInventoryItem_pkey" PRIMARY KEY ("id")
);

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
    "ownerUsername" TEXT,
    "ownerEmail" TEXT,
    "forkedFrom" TEXT,
    "styleIdentifier" TEXT,
    "styleId" INTEGER,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HopIngredient" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "usage" "HopIngredientUsage" NOT NULL,
    "amountType" "MassUnit" NOT NULL DEFAULT 'g',
    "temperature" DOUBLE PRECISION,
    "type" "HopIngredientType" NOT NULL DEFAULT 'Pellet',
    "duration" DOUBLE PRECISION NOT NULL,
    "durationType" "TimeUnit" NOT NULL DEFAULT 'min',
    "hopId" TEXT NOT NULL,
    "alpha" DOUBLE PRECISION,

    CONSTRAINT "HopIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FermentableIngredient" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT,
    "usage" "FermentableIngredientUsage" NOT NULL DEFAULT 'Mash',
    "amount" DOUBLE PRECISION NOT NULL,
    "amountType" "MassUnit" NOT NULL DEFAULT 'Lb',
    "fermentableId" TEXT NOT NULL,
    "color" DOUBLE PRECISION,
    "potential" DOUBLE PRECISION,

    CONSTRAINT "FermentableIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YeastIngredient" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "amountType" "MassUnit" NOT NULL DEFAULT 'Lb',
    "yeastId" TEXT NOT NULL,
    "packageDate" DATE,
    "cellCount" DOUBLE PRECISION,
    "attenuation" DOUBLE PRECISION,

    CONSTRAINT "YeastIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brewery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,

    CONSTRAINT "Brewery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreweryUser" (
    "breweryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "BreweryUserRoles" NOT NULL DEFAULT 'USER',

    CONSTRAINT "BreweryUser_pkey" PRIMARY KEY ("breweryId","userId")
);

-- CreateTable
CREATE TABLE "Vessel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "VesselType" NOT NULL DEFAULT 'Fermenter',
    "description" TEXT,
    "volume" DOUBLE PRECISION NOT NULL,
    "breweryId" TEXT NOT NULL,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Batch" (
    "id" TEXT NOT NULL,
    "batchNumber" INTEGER,
    "notes" TEXT,
    "og" DOUBLE PRECISION,
    "fg" DOUBLE PRECISION,
    "breweryId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "vesselId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "brewerId" TEXT NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Style_slug_key" ON "Style"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Style_identifier_key" ON "Style"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userId_key" ON "UserPreferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE INDEX "account_userId_idx" ON "account"("userId");

-- CreateIndex
CREATE INDEX "verification_identifier_idx" ON "verification"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "EquipmentProfile_slug_key" ON "EquipmentProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "WaterProfile_slug_key" ON "WaterProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MashProfile_slug_key" ON "MashProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MashStep_mashProfileId_index_key" ON "MashStep"("mashProfileId", "index");

-- CreateIndex
CREATE UNIQUE INDEX "FermentationProfile_slug_key" ON "FermentationProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "FermentationStep_fermentationProfileId_index_key" ON "FermentationStep"("fermentationProfileId", "index");

-- CreateIndex
CREATE UNIQUE INDEX "Fermentable_id_key" ON "Fermentable"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fermentable_slug_key" ON "Fermentable"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Hop_slug_key" ON "Hop"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Yeast_id_key" ON "Yeast"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Yeast_slug_key" ON "Yeast"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_id_key" ON "Inventory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_userId_key" ON "Inventory"("userId");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_defaultBreweryId_fkey" FOREIGN KEY ("defaultBreweryId") REFERENCES "Brewery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentProfile" ADD CONSTRAINT "EquipmentProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "EquipmentProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentProfile" ADD CONSTRAINT "EquipmentProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterProfile" ADD CONSTRAINT "WaterProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "WaterProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterProfile" ADD CONSTRAINT "WaterProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MashProfile" ADD CONSTRAINT "MashProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "MashProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MashProfile" ADD CONSTRAINT "MashProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MashStep" ADD CONSTRAINT "MashStep_mashProfileId_fkey" FOREIGN KEY ("mashProfileId") REFERENCES "MashProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentationProfile" ADD CONSTRAINT "FermentationProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "FermentationProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentationProfile" ADD CONSTRAINT "FermentationProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentationStep" ADD CONSTRAINT "FermentationStep_fermentationProfileId_fkey" FOREIGN KEY ("fermentationProfileId") REFERENCES "FermentationProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fermentable" ADD CONSTRAINT "Fermentable_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "Fermentable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fermentable" ADD CONSTRAINT "Fermentable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hop" ADD CONSTRAINT "Hop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Yeast" ADD CONSTRAINT "Yeast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopInventoryItem" ADD CONSTRAINT "HopInventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopInventoryItem" ADD CONSTRAINT "HopInventoryItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Hop"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YeastInventoryItem" ADD CONSTRAINT "YeastInventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YeastInventoryItem" ADD CONSTRAINT "YeastInventoryItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Yeast"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableInventoryItem" ADD CONSTRAINT "FermentableInventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableInventoryItem" ADD CONSTRAINT "FermentableInventoryItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Fermentable"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_equipmentProfileId_fkey" FOREIGN KEY ("equipmentProfileId") REFERENCES "EquipmentProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_mashProfileId_fkey" FOREIGN KEY ("mashProfileId") REFERENCES "MashProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_styleIdentifier_fkey" FOREIGN KEY ("styleIdentifier") REFERENCES "Style"("identifier") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopIngredient" ADD CONSTRAINT "HopIngredient_hopId_fkey" FOREIGN KEY ("hopId") REFERENCES "Hop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopIngredient" ADD CONSTRAINT "HopIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableIngredient" ADD CONSTRAINT "FermentableIngredient_fermentableId_fkey" FOREIGN KEY ("fermentableId") REFERENCES "Fermentable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentableIngredient" ADD CONSTRAINT "FermentableIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YeastIngredient" ADD CONSTRAINT "YeastIngredient_yeastId_fkey" FOREIGN KEY ("yeastId") REFERENCES "Yeast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YeastIngredient" ADD CONSTRAINT "YeastIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreweryUser" ADD CONSTRAINT "BreweryUser_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreweryUser" ADD CONSTRAINT "BreweryUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_brewerId_fkey" FOREIGN KEY ("brewerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_breweryId_brewerId_fkey" FOREIGN KEY ("breweryId", "brewerId") REFERENCES "BreweryUser"("breweryId", "userId") ON DELETE RESTRICT ON UPDATE CASCADE;
