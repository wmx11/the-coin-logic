/*
  Warnings:

  - You are about to drop the column `referrer` on the `MarketingTrackerResult` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarketingTrackerResult" DROP COLUMN "referrer",
ADD COLUMN     "referer" TEXT NOT NULL DEFAULT E'';
