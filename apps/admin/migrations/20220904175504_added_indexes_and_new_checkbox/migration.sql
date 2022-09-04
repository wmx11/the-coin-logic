-- AlterTable
ALTER TABLE "Block" ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "markForDeletion" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Holder_address_idx" ON "Holder"("address");

-- CreateIndex
CREATE INDEX "Holder_dateAdded_idx" ON "Holder"("dateAdded");

-- CreateIndex
CREATE INDEX "Transfer_toAddress_idx" ON "Transfer"("toAddress");

-- CreateIndex
CREATE INDEX "Transfer_hash_idx" ON "Transfer"("hash");

-- CreateIndex
CREATE INDEX "Transfer_createdAt_idx" ON "Transfer"("createdAt");
