/*
  Warnings:

  - You are about to drop the column `isPercentage` on the `MarketingCampaign` table. All the data in the column will be lost.
  - You are about to drop the column `socialsBudget` on the `MarketingCampaign` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `MarketingCampaign` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarketingCampaign" DROP COLUMN "isPercentage",
DROP COLUMN "socialsBudget",
DROP COLUMN "status",
ADD COLUMN     "socialBudget" DOUBLE PRECISION,
ADD COLUMN     "trackMarket" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "trackSocial" BOOLEAN NOT NULL DEFAULT true;
