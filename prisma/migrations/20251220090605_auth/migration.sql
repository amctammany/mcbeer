-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('SUPERUSER', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "MassSystem" AS ENUM ('US', 'Imperial', 'Metric');

-- CreateEnum
CREATE TYPE "MassUnit" AS ENUM ('Oz', 'Lb', 'g', 'Kg');

-- CreateEnum
CREATE TYPE "FlowUnit" AS ENUM ('gpm', 'lpm');

-- CreateEnum
CREATE TYPE "ConcentrationUnit" AS ENUM ('ppm', 'ppb');

-- CreateEnum
CREATE TYPE "TimeUnit" AS ENUM ('min', 'hr', 'day');

-- CreateEnum
CREATE TYPE "PercentUnit" AS ENUM ('percent', 'percentage');

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
CREATE TYPE "UserGravityPreference" AS ENUM ('SG', 'Brix', 'Plato', 'nD', 'GCM3');

-- CreateEnum
CREATE TYPE "UserColorPreference" AS ENUM ('L', 'EBC', 'SRM');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL DEFAULT 'USER',
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
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
    "gravity" "UserGravityPreference" NOT NULL DEFAULT 'SG',
    "temperature" "UserTemperaturePreference" NOT NULL DEFAULT 'F',
    "pressure" "UserPressurePreference" NOT NULL DEFAULT 'PSI',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateTable
CREATE TABLE "Authenticator" (
    "credentialID" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "credentialPublicKey" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "credentialDeviceType" TEXT NOT NULL,
    "credentialBackedUp" BOOLEAN NOT NULL,
    "transports" TEXT,

    CONSTRAINT "Authenticator_pkey" PRIMARY KEY ("userId","credentialID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userId_key" ON "UserPreferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Authenticator_credentialID_key" ON "Authenticator"("credentialID");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authenticator" ADD CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
