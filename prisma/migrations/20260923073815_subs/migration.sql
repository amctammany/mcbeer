-- CreateTable
CREATE TABLE "HopSubstitution" (
    "baseId" TEXT NOT NULL,
    "subId" TEXT NOT NULL,

    CONSTRAINT "HopSubstitution_pkey" PRIMARY KEY ("baseId","subId")
);

-- AddForeignKey
ALTER TABLE "HopSubstitution" ADD CONSTRAINT "HopSubstitution_baseId_fkey" FOREIGN KEY ("baseId") REFERENCES "Hop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HopSubstitution" ADD CONSTRAINT "HopSubstitution_subId_fkey" FOREIGN KEY ("subId") REFERENCES "Hop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
