-- AlterTable
ALTER TABLE "MarketingCampaign" ADD COLUMN     "isPercentage" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "marketBudget" DOUBLE PRECISION,
ADD COLUMN     "notes" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "socialsBudget" DOUBLE PRECISION;
