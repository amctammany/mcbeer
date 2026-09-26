-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "waterProfileId" TEXT;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_waterProfileId_fkey" FOREIGN KEY ("waterProfileId") REFERENCES "WaterProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
