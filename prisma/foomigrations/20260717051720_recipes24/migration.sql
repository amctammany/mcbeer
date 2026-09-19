-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_styleId_fkey";

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_styleIdentifier_fkey" FOREIGN KEY ("styleIdentifier") REFERENCES "Style"("identifier") ON DELETE SET NULL ON UPDATE CASCADE;
