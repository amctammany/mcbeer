/*
  Warnings:

  - The values [L] on the enum `UserColorPreference` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserColorPreference_new" AS ENUM ('Lovibond', 'EBC', 'SRM');
ALTER TABLE "public"."UserPreferences" ALTER COLUMN "color" DROP DEFAULT;
ALTER TABLE "UserPreferences" ALTER COLUMN "color" TYPE "UserColorPreference_new" USING ("color"::text::"UserColorPreference_new");
ALTER TYPE "UserColorPreference" RENAME TO "UserColorPreference_old";
ALTER TYPE "UserColorPreference_new" RENAME TO "UserColorPreference";
DROP TYPE "public"."UserColorPreference_old";
ALTER TABLE "UserPreferences" ALTER COLUMN "color" SET DEFAULT 'Lovibond';
COMMIT;

-- AlterTable
ALTER TABLE "UserPreferences" ALTER COLUMN "color" SET DEFAULT 'Lovibond';
