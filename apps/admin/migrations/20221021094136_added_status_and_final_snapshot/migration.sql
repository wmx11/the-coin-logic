-- AlterTable
ALTER TABLE "MarketingCampaign" ADD COLUMN     "finalSnapshot" JSONB,
ADD COLUMN     "status" TEXT DEFAULT E'live',
ALTER COLUMN "enabled" SET DEFAULT true;
