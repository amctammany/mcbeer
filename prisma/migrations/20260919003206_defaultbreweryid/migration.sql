-- AlterTable
ALTER TABLE "user" ADD COLUMN     "defaultBreweryId" TEXT;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_defaultBreweryId_fkey" FOREIGN KEY ("defaultBreweryId") REFERENCES "Brewery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
