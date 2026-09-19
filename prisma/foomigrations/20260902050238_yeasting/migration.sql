-- CreateTable
CREATE TABLE "YeastIngredient" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "amountType" "MassUnit" NOT NULL DEFAULT 'Lb',
    "yeastId" TEXT NOT NULL,
    "packageDate" DATE,
    "cellCount" DOUBLE PRECISION,
    "attentuation" DOUBLE PRECISION,

    CONSTRAINT "YeastIngredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "YeastIngredient" ADD CONSTRAINT "YeastIngredient_yeastId_fkey" FOREIGN KEY ("yeastId") REFERENCES "Yeast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YeastIngredient" ADD CONSTRAINT "YeastIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
