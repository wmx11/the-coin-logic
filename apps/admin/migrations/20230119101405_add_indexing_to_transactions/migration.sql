-- CreateIndex
CREATE INDEX "Holder_updatedAt_idx" ON "Holder"("updatedAt");

-- CreateIndex
CREATE INDEX "Transfer_address_idx" ON "Transfer"("address");

-- CreateIndex
CREATE INDEX "Transfer_fromAddress_idx" ON "Transfer"("fromAddress");

-- CreateIndex
CREATE INDEX "Transfer_updatedAt_idx" ON "Transfer"("updatedAt");
