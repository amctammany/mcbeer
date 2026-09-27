-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "fermentationProfileId" TEXT;

-- CreateTable
CREATE TABLE "RecipeMashStep" (
    "id" SERIAL NOT NULL,
    "type" "MashStepType" DEFAULT 'temperature',
    "name" TEXT,
    "temperature" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "rampTime" INTEGER DEFAULT 0,
    "index" INTEGER NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "RecipeMashStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeFermentationStep" (
    "type" "FermentationStepType" NOT NULL DEFAULT 'primary',
    "name" TEXT,
    "temperature" DOUBLE PRECISION NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "rampTime" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "recipeId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "RecipeFermentationStep_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecipeMashStep_recipeId_index_key" ON "RecipeMashStep"("recipeId", "index");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeFermentationStep_recipeId_index_key" ON "RecipeFermentationStep"("recipeId", "index");

-- AddForeignKey
ALTER TABLE "RecipeMashStep" ADD CONSTRAINT "RecipeMashStep_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeFermentationStep" ADD CONSTRAINT "RecipeFermentationStep_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_fermentationProfileId_fkey" FOREIGN KEY ("fermentationProfileId") REFERENCES "FermentationProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
