/*
  Warnings:

  - The values [percentage] on the enum `PercentUnit` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PercentUnit_new" AS ENUM ('number', 'percent');
ALTER TABLE "public"."UserPreferences" ALTER COLUMN "percent" DROP DEFAULT;
ALTER TABLE "UserPreferences" ALTER COLUMN "percent" TYPE "PercentUnit_new" USING ("percent"::text::"PercentUnit_new");
ALTER TYPE "PercentUnit" RENAME TO "PercentUnit_old";
ALTER TYPE "PercentUnit_new" RENAME TO "PercentUnit";
DROP TYPE "public"."PercentUnit_old";
ALTER TABLE "UserPreferences" ALTER COLUMN "percent" SET DEFAULT 'percent';
COMMIT;
