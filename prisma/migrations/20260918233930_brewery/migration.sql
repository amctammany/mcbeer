-- CreateEnum
CREATE TYPE "VesselType" AS ENUM ('MashTun', 'LauterTun', 'Kettle', 'Fermenter', 'BriteTank', 'HotLiquorTank');

-- CreateEnum
CREATE TYPE "BreweryUserRoles" AS ENUM ('OWNER', 'ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Brewery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brewery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreweryUser" (
    "id" TEXT NOT NULL,
    "breweryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "BreweryUserRoles" NOT NULL DEFAULT 'USER',

    CONSTRAINT "BreweryUser_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "BreweryUser" ADD CONSTRAINT "BreweryUser_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreweryUser" ADD CONSTRAINT "BreweryUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vessel" ADD CONSTRAINT "Vessel_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_brewerId_fkey" FOREIGN KEY ("brewerId") REFERENCES "BreweryUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_breweryId_fkey" FOREIGN KEY ("breweryId") REFERENCES "Brewery"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Batch" ADD CONSTRAINT "Batch_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
