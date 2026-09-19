-- CreateEnum
CREATE TYPE "MashStepType" AS ENUM ('temperature', 'infusion', 'decoction');

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

-- CreateIndex
CREATE UNIQUE INDEX "MashProfile_slug_key" ON "MashProfile"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MashStep_mashProfileId_index_key" ON "MashStep"("mashProfileId", "index");

-- AddForeignKey
ALTER TABLE "MashProfile" ADD CONSTRAINT "MashProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "MashProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MashProfile" ADD CONSTRAINT "MashProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MashStep" ADD CONSTRAINT "MashStep_mashProfileId_fkey" FOREIGN KEY ("mashProfileId") REFERENCES "MashProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
