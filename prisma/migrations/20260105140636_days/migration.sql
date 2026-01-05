/*
  Warnings:

  - The values [day] on the enum `TimeUnit` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TimeUnit_new" AS ENUM ('min', 'hr', 'days');
ALTER TABLE "public"."UserPreferences" ALTER COLUMN "time" DROP DEFAULT;
ALTER TABLE "UserPreferences" ALTER COLUMN "time" TYPE "TimeUnit_new" USING ("time"::text::"TimeUnit_new");
ALTER TYPE "TimeUnit" RENAME TO "TimeUnit_old";
ALTER TYPE "TimeUnit_new" RENAME TO "TimeUnit";
DROP TYPE "public"."TimeUnit_old";
ALTER TABLE "UserPreferences" ALTER COLUMN "time" SET DEFAULT 'min';
COMMIT;
