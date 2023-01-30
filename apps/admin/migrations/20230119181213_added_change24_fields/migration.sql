-- AlterTable
ALTER TABLE "MarketStat" ADD COLUMN     "avgHoldingsChange24" DOUBLE PRECISION,
ADD COLUMN     "burnedTokensChange24" DOUBLE PRECISION,
ADD COLUMN     "fdvChange24" DOUBLE PRECISION,
ADD COLUMN     "holdersChange24" DOUBLE PRECISION,
ADD COLUMN     "leavingHoldersChange24" DOUBLE PRECISION,
ADD COLUMN     "liquidityChange24" DOUBLE PRECISION,
ADD COLUMN     "marketCapChange24" DOUBLE PRECISION,
ADD COLUMN     "newHoldersChange24" DOUBLE PRECISION,
ADD COLUMN     "pairPriceChange24" DOUBLE PRECISION,
ADD COLUMN     "priceChange24" DOUBLE PRECISION,
ADD COLUMN     "recurringHoldersChange24" DOUBLE PRECISION,
ADD COLUMN     "totalSupplyChange24" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SocialStat" ADD COLUMN     "discordChange24" DOUBLE PRECISION,
ADD COLUMN     "telegramChange24" DOUBLE PRECISION,
ADD COLUMN     "twitterChange24" DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "MarketStat_priceChange24_idx" ON "MarketStat"("priceChange24");

-- CreateIndex
CREATE INDEX "MarketStat_marketCapChange24_idx" ON "MarketStat"("marketCapChange24");

-- CreateIndex
CREATE INDEX "MarketStat_totalSupplyChange24_idx" ON "MarketStat"("totalSupplyChange24");

-- CreateIndex
CREATE INDEX "MarketStat_liquidityChange24_idx" ON "MarketStat"("liquidityChange24");

-- CreateIndex
CREATE INDEX "MarketStat_pairPriceChange24_idx" ON "MarketStat"("pairPriceChange24");

-- CreateIndex
CREATE INDEX "MarketStat_burnedTokensChange24_idx" ON "MarketStat"("burnedTokensChange24");

-- CreateIndex
CREATE INDEX "MarketStat_fdvChange24_idx" ON "MarketStat"("fdvChange24");

-- CreateIndex
CREATE INDEX "MarketStat_holdersChange24_idx" ON "MarketStat"("holdersChange24");

-- CreateIndex
CREATE INDEX "MarketStat_avgHoldingsChange24_idx" ON "MarketStat"("avgHoldingsChange24");

-- CreateIndex
CREATE INDEX "MarketStat_newHoldersChange24_idx" ON "MarketStat"("newHoldersChange24");

-- CreateIndex
CREATE INDEX "MarketStat_leavingHoldersChange24_idx" ON "MarketStat"("leavingHoldersChange24");

-- CreateIndex
CREATE INDEX "MarketStat_recurringHoldersChange24_idx" ON "MarketStat"("recurringHoldersChange24");
