-- CreateIndex
CREATE INDEX "MarketStat_price_idx" ON "MarketStat"("price");

-- CreateIndex
CREATE INDEX "MarketStat_marketCap_idx" ON "MarketStat"("marketCap");

-- CreateIndex
CREATE INDEX "MarketStat_totalSupply_idx" ON "MarketStat"("totalSupply");

-- CreateIndex
CREATE INDEX "MarketStat_liquidity_idx" ON "MarketStat"("liquidity");

-- CreateIndex
CREATE INDEX "MarketStat_pairPrice_idx" ON "MarketStat"("pairPrice");

-- CreateIndex
CREATE INDEX "MarketStat_burnedTokens_idx" ON "MarketStat"("burnedTokens");

-- CreateIndex
CREATE INDEX "MarketStat_fdv_idx" ON "MarketStat"("fdv");

-- CreateIndex
CREATE INDEX "MarketStat_holders_idx" ON "MarketStat"("holders");

-- CreateIndex
CREATE INDEX "MarketStat_avgHoldings_idx" ON "MarketStat"("avgHoldings");

-- CreateIndex
CREATE INDEX "MarketStat_newHolders_idx" ON "MarketStat"("newHolders");

-- CreateIndex
CREATE INDEX "MarketStat_leavingHolders_idx" ON "MarketStat"("leavingHolders");

-- CreateIndex
CREATE INDEX "MarketStat_recurringHolders_idx" ON "MarketStat"("recurringHolders");

-- CreateIndex
CREATE INDEX "MarketStat_annotation_idx" ON "MarketStat"("annotation");
