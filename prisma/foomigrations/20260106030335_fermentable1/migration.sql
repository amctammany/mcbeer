-- AlterTable
ALTER TABLE "Fermentable" ADD COLUMN     "forkedFrom" TEXT;

-- AddForeignKey
ALTER TABLE "Fermentable" ADD CONSTRAINT "Fermentable_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "Fermentable"("id") ON DELETE SET NULL ON UPDATE CASCADE;
