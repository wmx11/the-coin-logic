/*
  Warnings:

  - You are about to drop the column `usageDescription` on the `ServiceToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ServiceToken" DROP COLUMN "usageDescription",
ADD COLUMN     "discount" DOUBLE PRECISION DEFAULT 0;

-- CreateTable
CREATE TABLE "ServiceTokenUsage" (
    "id" TEXT NOT NULL,
    "used" DOUBLE PRECISION DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT E'',
    "serviceToken" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ServiceTokenUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ServiceTokenUsage_serviceToken_idx" ON "ServiceTokenUsage"("serviceToken");

-- AddForeignKey
ALTER TABLE "ServiceTokenUsage" ADD CONSTRAINT "ServiceTokenUsage_serviceToken_fkey" FOREIGN KEY ("serviceToken") REFERENCES "ServiceToken"("id") ON DELETE SET NULL ON UPDATE CASCADE;
