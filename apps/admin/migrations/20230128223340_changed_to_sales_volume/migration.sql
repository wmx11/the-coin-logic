/*
  Warnings:

  - You are about to drop the column `salesAmount` on the `MarketStat` table. All the data in the column will be lost.
  - You are about to drop the column `salesAmountChange24` on the `MarketStat` table. All the data in the column will be lost.
  - You are about to drop the column `salesAmountChange24Percentage` on the `MarketStat` table. All the data in the column will be lost.
  - You are about to drop the column `salesValue` on the `MarketStat` table. All the data in the column will be lost.
  - You are about to drop the column `salesValueChange24` on the `MarketStat` table. All the data in the column will be lost.
  - You are about to drop the column `salesValueChange24Percentage` on the `MarketStat` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "MarketStat_salesAmountChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_salesAmountChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_salesAmount_idx";

-- DropIndex
DROP INDEX "MarketStat_salesValueChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_salesValueChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_salesValue_idx";

-- AlterTable
ALTER TABLE "MarketStat" DROP COLUMN "salesAmount",
DROP COLUMN "salesAmountChange24",
DROP COLUMN "salesAmountChange24Percentage",
DROP COLUMN "salesValue",
DROP COLUMN "salesValueChange24",
DROP COLUMN "salesValueChange24Percentage",
ADD COLUMN     "salesVolume" DOUBLE PRECISION,
ADD COLUMN     "salesVolumeChange24" DOUBLE PRECISION,
ADD COLUMN     "salesVolumeChange24Percentage" DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "MarketStat_salesVolume_idx" ON "MarketStat"("salesVolume");

-- CreateIndex
CREATE INDEX "MarketStat_salesVolumeChange24_idx" ON "MarketStat"("salesVolumeChange24");

-- CreateIndex
CREATE INDEX "MarketStat_salesVolumeChange24Percentage_idx" ON "MarketStat"("salesVolumeChange24Percentage");
