/*
  Warnings:

  - The primary key for the `WaterProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "WaterProfile" DROP CONSTRAINT "WaterProfile_forkedFrom_fkey";

-- AlterTable
ALTER TABLE "WaterProfile" DROP CONSTRAINT "WaterProfile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "forkedFrom" SET DATA TYPE TEXT,
ADD CONSTRAINT "WaterProfile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WaterProfile_id_seq";

-- AddForeignKey
ALTER TABLE "WaterProfile" ADD CONSTRAINT "WaterProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "WaterProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
