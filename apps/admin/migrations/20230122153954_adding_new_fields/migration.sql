-- AlterTable
ALTER TABLE "MarketStat" ADD COLUMN     "avgPrice" DOUBLE PRECISION,
ADD COLUMN     "avgPriceChange24" DOUBLE PRECISION,
ADD COLUMN     "avgPriceChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "ceilPrice" DOUBLE PRECISION,
ADD COLUMN     "ceilPriceChange24" DOUBLE PRECISION,
ADD COLUMN     "ceilPriceChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "floorPrice" DOUBLE PRECISION,
ADD COLUMN     "floorPriceChange24" DOUBLE PRECISION,
ADD COLUMN     "floorPriceChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "salesAmount" DOUBLE PRECISION,
ADD COLUMN     "salesAmountChange24" DOUBLE PRECISION,
ADD COLUMN     "salesAmountChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "salesValue" DOUBLE PRECISION,
ADD COLUMN     "salesValueChange24" DOUBLE PRECISION,
ADD COLUMN     "salesValueChange24Percentage" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "symbol" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "tokenType" TEXT;

-- AlterTable
ALTER TABLE "Transfer" ADD COLUMN     "tokenId" TEXT NOT NULL DEFAULT E'';

-- CreateIndex
CREATE INDEX "MarketStat_avgPrice_idx" ON "MarketStat"("avgPrice");

-- CreateIndex
CREATE INDEX "MarketStat_avgPriceChange24_idx" ON "MarketStat"("avgPriceChange24");

-- CreateIndex
CREATE INDEX "MarketStat_avgPriceChange24Percentage_idx" ON "MarketStat"("avgPriceChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_floorPrice_idx" ON "MarketStat"("floorPrice");

-- CreateIndex
CREATE INDEX "MarketStat_floorPriceChange24_idx" ON "MarketStat"("floorPriceChange24");

-- CreateIndex
CREATE INDEX "MarketStat_floorPriceChange24Percentage_idx" ON "MarketStat"("floorPriceChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_ceilPrice_idx" ON "MarketStat"("ceilPrice");

-- CreateIndex
CREATE INDEX "MarketStat_ceilPriceChange24_idx" ON "MarketStat"("ceilPriceChange24");

-- CreateIndex
CREATE INDEX "MarketStat_ceilPriceChange24Percentage_idx" ON "MarketStat"("ceilPriceChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_salesAmount_idx" ON "MarketStat"("salesAmount");

-- CreateIndex
CREATE INDEX "MarketStat_salesAmountChange24_idx" ON "MarketStat"("salesAmountChange24");

-- CreateIndex
CREATE INDEX "MarketStat_salesAmountChange24Percentage_idx" ON "MarketStat"("salesAmountChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_salesValue_idx" ON "MarketStat"("salesValue");

-- CreateIndex
CREATE INDEX "MarketStat_salesValueChange24_idx" ON "MarketStat"("salesValueChange24");

-- CreateIndex
CREATE INDEX "MarketStat_salesValueChange24Percentage_idx" ON "MarketStat"("salesValueChange24Percentage");

-- CreateIndex
CREATE INDEX "Transfer_type_idx" ON "Transfer"("type");

-- CreateIndex
CREATE INDEX "Transfer_tokenId_idx" ON "Transfer"("tokenId");
