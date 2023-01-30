-- AlterTable
ALTER TABLE "MarketStat" ADD COLUMN     "avgHoldingsChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "burnedTokensChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "fdvChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "holdersChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "leavingHoldersChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "liquidityChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "marketCapChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "newHoldersChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "pairPriceChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "priceChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "recurringHoldersChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "totalSupplyChange24Percentage" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SocialStat" ADD COLUMN     "discordChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "telegramChange24Percentage" DOUBLE PRECISION,
ADD COLUMN     "twitterChange24Percentage" DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "MarketStat_priceChange24Percentage_idx" ON "MarketStat"("priceChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_marketCapChange24Percentage_idx" ON "MarketStat"("marketCapChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_totalSupplyChange24Percentage_idx" ON "MarketStat"("totalSupplyChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_liquidityChange24Percentage_idx" ON "MarketStat"("liquidityChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_pairPriceChange24Percentage_idx" ON "MarketStat"("pairPriceChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_burnedTokensChange24Percentage_idx" ON "MarketStat"("burnedTokensChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_fdvChange24Percentage_idx" ON "MarketStat"("fdvChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_holdersChange24Percentage_idx" ON "MarketStat"("holdersChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_avgHoldingsChange24Percentage_idx" ON "MarketStat"("avgHoldingsChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_newHoldersChange24Percentage_idx" ON "MarketStat"("newHoldersChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_leavingHoldersChange24Percentage_idx" ON "MarketStat"("leavingHoldersChange24Percentage");

-- CreateIndex
CREATE INDEX "MarketStat_recurringHoldersChange24Percentage_idx" ON "MarketStat"("recurringHoldersChange24Percentage");
