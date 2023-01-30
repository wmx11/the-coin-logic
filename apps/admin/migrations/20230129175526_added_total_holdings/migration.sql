-- DropIndex
DROP INDEX "MarketStat_avgHoldingsChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_avgHoldingsChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_avgHoldings_idx";

-- DropIndex
DROP INDEX "MarketStat_avgPriceChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_avgPriceChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_avgPrice_idx";

-- DropIndex
DROP INDEX "MarketStat_burnedTokensChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_burnedTokensChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_burnedTokens_idx";

-- DropIndex
DROP INDEX "MarketStat_ceilPriceChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_ceilPriceChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_ceilPrice_idx";

-- DropIndex
DROP INDEX "MarketStat_fdvChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_fdvChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_fdv_idx";

-- DropIndex
DROP INDEX "MarketStat_floorPriceChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_floorPriceChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_floorPrice_idx";

-- DropIndex
DROP INDEX "MarketStat_holdersChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_holdersChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_holders_idx";

-- DropIndex
DROP INDEX "MarketStat_leavingHoldersChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_leavingHoldersChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_leavingHolders_idx";

-- DropIndex
DROP INDEX "MarketStat_liquidityChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_liquidityChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_liquidity_idx";

-- DropIndex
DROP INDEX "MarketStat_marketCapChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_marketCapChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_marketCap_idx";

-- DropIndex
DROP INDEX "MarketStat_newHoldersChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_newHoldersChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_newHolders_idx";

-- DropIndex
DROP INDEX "MarketStat_pairPriceChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_pairPriceChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_pairPrice_idx";

-- DropIndex
DROP INDEX "MarketStat_priceChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_priceChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_price_idx";

-- DropIndex
DROP INDEX "MarketStat_recurringHoldersChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_recurringHoldersChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_recurringHolders_idx";

-- DropIndex
DROP INDEX "MarketStat_salesVolumeChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_salesVolumeChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_salesVolume_idx";

-- DropIndex
DROP INDEX "MarketStat_totalSupplyChange24Percentage_idx";

-- DropIndex
DROP INDEX "MarketStat_totalSupplyChange24_idx";

-- DropIndex
DROP INDEX "MarketStat_totalSupply_idx";

-- AlterTable
ALTER TABLE "MarketStat" ADD COLUMN     "totalHoldings" DOUBLE PRECISION,
ADD COLUMN     "totalHoldingsChange24" DOUBLE PRECISION,
ADD COLUMN     "totalHoldingsChange24Percentage" DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "Holder_balance_idx" ON "Holder"("balance");

-- CreateIndex
CREATE INDEX "Transfer_amount_idx" ON "Transfer"("amount");
