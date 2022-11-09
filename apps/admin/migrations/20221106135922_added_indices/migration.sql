-- CreateIndex
CREATE INDEX "MarketStat_dateAdded_idx" ON "MarketStat"("dateAdded");

-- CreateIndex
CREATE INDEX "MarketingTrackerResult_dateAdded_idx" ON "MarketingTrackerResult"("dateAdded");

-- CreateIndex
CREATE INDEX "Project_slug_idx" ON "Project"("slug");

-- CreateIndex
CREATE INDEX "SocialStat_dateAdded_idx" ON "SocialStat"("dateAdded");
