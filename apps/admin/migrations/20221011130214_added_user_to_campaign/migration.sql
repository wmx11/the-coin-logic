/*
  Warnings:

  - You are about to drop the column `campaignInd` on the `MarketingCampaign` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarketingCampaign" DROP COLUMN "campaignInd",
ADD COLUMN     "campaignId" TEXT NOT NULL DEFAULT E'';

-- CreateTable
CREATE TABLE "_MarketingCampaign_users" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MarketingCampaign_users_AB_unique" ON "_MarketingCampaign_users"("A", "B");

-- CreateIndex
CREATE INDEX "_MarketingCampaign_users_B_index" ON "_MarketingCampaign_users"("B");

-- AddForeignKey
ALTER TABLE "_MarketingCampaign_users" ADD CONSTRAINT "_MarketingCampaign_users_A_fkey" FOREIGN KEY ("A") REFERENCES "MarketingCampaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MarketingCampaign_users" ADD CONSTRAINT "_MarketingCampaign_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
