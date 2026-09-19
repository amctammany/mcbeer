-- CreateTable
CREATE TABLE "WaterProfile" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "calcium" INTEGER DEFAULT 0,
    "magnesium" INTEGER DEFAULT 0,
    "sodium" INTEGER DEFAULT 0,
    "chloride" INTEGER DEFAULT 0,
    "sulfate" INTEGER DEFAULT 0,
    "bicarbonate" INTEGER DEFAULT 0,
    "description" TEXT,
    "forkedFrom" INTEGER,

    CONSTRAINT "WaterProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WaterProfile_slug_key" ON "WaterProfile"("slug");

-- AddForeignKey
ALTER TABLE "WaterProfile" ADD CONSTRAINT "WaterProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterProfile" ADD CONSTRAINT "WaterProfile_forkedFrom_fkey" FOREIGN KEY ("forkedFrom") REFERENCES "WaterProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
