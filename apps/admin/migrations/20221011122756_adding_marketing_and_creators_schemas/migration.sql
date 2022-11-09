-- CreateTable
CREATE TABLE "Creator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isListed" BOOLEAN NOT NULL DEFAULT false,
    "nickname" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "description" TEXT NOT NULL DEFAULT E'',
    "website" TEXT NOT NULL DEFAULT E'',
    "twitter" TEXT NOT NULL DEFAULT E'',
    "telegram" TEXT NOT NULL DEFAULT E'',
    "discord" TEXT NOT NULL DEFAULT E'',
    "reddit" TEXT NOT NULL DEFAULT E'',
    "youtube" TEXT NOT NULL DEFAULT E'',
    "priceFrom" DOUBLE PRECISION,
    "priceTo" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreatorRating" (
    "id" TEXT NOT NULL,
    "rating" INTEGER DEFAULT 0,
    "creator" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CreatorRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreatorReview" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL DEFAULT E'',
    "creator" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CreatorReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketingCampaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "campaignInd" TEXT NOT NULL DEFAULT E'',
    "status" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isInternal" BOOLEAN NOT NULL DEFAULT false,
    "startDate" DATE,
    "endDate" DATE,
    "budget" DOUBLE PRECISION,
    "description" TEXT NOT NULL DEFAULT E'',
    "agency" TEXT NOT NULL DEFAULT E'',
    "agencyUrl" TEXT NOT NULL DEFAULT E'',
    "creator" TEXT,
    "project" TEXT,
    "priceGoal" DOUBLE PRECISION,
    "marketCapGoal" DOUBLE PRECISION,
    "volumeGoal" DOUBLE PRECISION,
    "holdersGoal" DOUBLE PRECISION,
    "twitterGoal" DOUBLE PRECISION,
    "discordGoal" DOUBLE PRECISION,
    "telegramGoal" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "MarketingCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketingTrackerResult" (
    "id" TEXT NOT NULL,
    "referrer" TEXT NOT NULL DEFAULT E'',
    "ipAddress" TEXT NOT NULL DEFAULT E'',
    "userAgent" TEXT NOT NULL DEFAULT E'',
    "timezone" TEXT NOT NULL DEFAULT E'',
    "city" TEXT NOT NULL DEFAULT E'',
    "country" TEXT NOT NULL DEFAULT E'',
    "target" TEXT NOT NULL DEFAULT E'',
    "marketingCampaign" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "MarketingTrackerResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreatorRating_creator_idx" ON "CreatorRating"("creator");

-- CreateIndex
CREATE INDEX "CreatorReview_creator_idx" ON "CreatorReview"("creator");

-- CreateIndex
CREATE INDEX "MarketingCampaign_creator_idx" ON "MarketingCampaign"("creator");

-- CreateIndex
CREATE INDEX "MarketingCampaign_project_idx" ON "MarketingCampaign"("project");

-- CreateIndex
CREATE INDEX "MarketingTrackerResult_marketingCampaign_idx" ON "MarketingTrackerResult"("marketingCampaign");

-- AddForeignKey
ALTER TABLE "CreatorRating" ADD CONSTRAINT "CreatorRating_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatorReview" ADD CONSTRAINT "CreatorReview_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketingCampaign" ADD CONSTRAINT "MarketingCampaign_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketingCampaign" ADD CONSTRAINT "MarketingCampaign_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketingTrackerResult" ADD CONSTRAINT "MarketingTrackerResult_marketingCampaign_fkey" FOREIGN KEY ("marketingCampaign") REFERENCES "MarketingCampaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;
