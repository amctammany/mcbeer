-- CreateEnum
CREATE TYPE "FermentationStepType" AS ENUM ('primary', 'secondary', 'tertiary', 'coldcrash', 'conditioning');

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
    "id" TEXT NOT NULL,
    "type" "FermentationStepType" NOT NULL DEFAULT 'primary',
    "name" TEXT,
    "rank" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "rampTime" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fermentationProfileId" TEXT,

    CONSTRAINT "FermentationStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FermentationProfile_slug_key" ON "FermentationProfile"("slug");

-- AddForeignKey
ALTER TABLE "FermentationProfile" ADD CONSTRAINT "FermentationProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentationProfile" ADD CONSTRAINT "FermentationProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "FermentationProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FermentationStep" ADD CONSTRAINT "FermentationStep_fermentationProfileId_fkey" FOREIGN KEY ("fermentationProfileId") REFERENCES "FermentationProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
