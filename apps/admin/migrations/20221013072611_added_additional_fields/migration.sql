-- AlterTable
ALTER TABLE "MarketingTrackerResult" ADD COLUMN     "countryCode" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "device" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "os" TEXT NOT NULL DEFAULT E'';
