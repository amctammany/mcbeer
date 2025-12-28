-- CreateEnum
CREATE TYPE "MashSpargeWaterCalculations" AS ENUM ('Default', 'BatchSparge', 'NoSparge', 'IgnoreExpansion');

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "role" DROP NOT NULL;

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

-- CreateIndex
CREATE UNIQUE INDEX "EquipmentProfile_slug_key" ON "EquipmentProfile"("slug");

-- AddForeignKey
ALTER TABLE "EquipmentProfile" ADD CONSTRAINT "EquipmentProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "EquipmentProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquipmentProfile" ADD CONSTRAINT "EquipmentProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
