-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "firstName" TEXT NOT NULL DEFAULT E'',
    "lastName" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isSubscribedToEmail" BOOLEAN NOT NULL DEFAULT false,
    "isNotChargeable" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT true,
    "subscribedTill" TIMESTAMP(3),
    "referrer" TEXT NOT NULL DEFAULT E'',
    "referralCode" TEXT NOT NULL DEFAULT E'',
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "emailVerificationString" TEXT NOT NULL DEFAULT E'',
    "emailVerificationExpiresIn" TIMESTAMP(3),
    "passwordResetToken" TEXT,
    "passwordResetIssuedAt" TIMESTAMP(3),
    "passwordResetRedeemedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "quantity" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "tax" DOUBLE PRECISION,
    "amount" DOUBLE PRECISION NOT NULL,
    "billedTo" TEXT,
    "paymentMethod" TEXT NOT NULL DEFAULT E'',
    "paymentAddress" TEXT NOT NULL DEFAULT E'',
    "status" TEXT,
    "invoiceUrl" TEXT NOT NULL DEFAULT E'',
    "dateIssued" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "datePaid" TIMESTAMP(3),

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isModerator" BOOLEAN NOT NULL DEFAULT false,
    "isEditor" BOOLEAN NOT NULL DEFAULT false,
    "isProjectOwner" BOOLEAN NOT NULL DEFAULT false,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "logo_filesize" INTEGER,
    "logo_extension" TEXT,
    "logo_width" INTEGER,
    "logo_height" INTEGER,
    "logo_id" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isListed" BOOLEAN NOT NULL DEFAULT false,
    "trackHolders" BOOLEAN NOT NULL DEFAULT false,
    "isRebasing" BOOLEAN NOT NULL DEFAULT false,
    "initialized" BOOLEAN NOT NULL DEFAULT false,
    "contractAddress" TEXT NOT NULL DEFAULT E'',
    "pairAddress" TEXT NOT NULL DEFAULT E'',
    "burnAddress" TEXT NOT NULL DEFAULT E'0x000000000000000000000000000000000000dead',
    "network" TEXT,
    "trackHoldersFromTokenAmount" DOUBLE PRECISION DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT E'',
    "launchDate" TIMESTAMP(3),
    "launchBlock" INTEGER,
    "trackFromBlock" INTEGER,
    "user" TEXT,
    "ABI" JSONB,
    "customData" JSONB DEFAULT '[]',
    "sellTax" DOUBLE PRECISION,
    "buyTax" DOUBLE PRECISION,
    "rebasePeriod" TEXT NOT NULL DEFAULT E'',
    "apy" DOUBLE PRECISION,
    "dailyApy" DOUBLE PRECISION,
    "website" TEXT NOT NULL DEFAULT E'',
    "whitepaper" TEXT NOT NULL DEFAULT E'',
    "twitter" TEXT NOT NULL DEFAULT E'',
    "telegram" TEXT NOT NULL DEFAULT E'',
    "discord" TEXT NOT NULL DEFAULT E'',
    "reddit" TEXT NOT NULL DEFAULT E'',
    "youtube" TEXT NOT NULL DEFAULT E'',
    "github" TEXT NOT NULL DEFAULT E'',
    "medium" TEXT NOT NULL DEFAULT E'',
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL DEFAULT E'',
    "type" TEXT,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketStat" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "marketCap" DOUBLE PRECISION,
    "totalSupply" DOUBLE PRECISION,
    "liquidity" DOUBLE PRECISION,
    "pairPrice" DOUBLE PRECISION,
    "holders" DOUBLE PRECISION,
    "avgHoldings" DOUBLE PRECISION,
    "newHolders" DOUBLE PRECISION,
    "leavingHolders" DOUBLE PRECISION,
    "recurringHolders" DOUBLE PRECISION,
    "customData" JSONB DEFAULT '[]',
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MarketStat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiquidityPair" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "address" TEXT NOT NULL DEFAULT E'',
    "stablePair" TEXT,
    "network" TEXT,
    "project" TEXT,
    "exchange" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LiquidityPair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exchange" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "logo_filesize" INTEGER,
    "logo_extension" TEXT,
    "logo_width" INTEGER,
    "logo_height" INTEGER,
    "logo_id" TEXT,
    "url" TEXT NOT NULL DEFAULT E'',
    "tradeUrl" TEXT NOT NULL DEFAULT E'',
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Exchange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "address" TEXT NOT NULL DEFAULT E'',
    "ABI" JSONB,
    "network" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Network" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "logo_filesize" INTEGER,
    "logo_extension" TEXT,
    "logo_width" INTEGER,
    "logo_height" INTEGER,
    "logo_id" TEXT,
    "url" TEXT NOT NULL DEFAULT E'',
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StableLiquidityPair" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "address" TEXT NOT NULL DEFAULT E'',
    "network" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StableLiquidityPair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordBot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "presence" TEXT NOT NULL DEFAULT E'',
    "botId" TEXT NOT NULL DEFAULT E'',
    "apiKey" TEXT NOT NULL DEFAULT E'',
    "tracking" TEXT,
    "customTracking" TEXT NOT NULL DEFAULT E'',
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordBot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "contentType" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "summary" TEXT NOT NULL DEFAULT E'',
    "content" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "blockName" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentBlock" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "blockName" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentType" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Block" (
    "id" TEXT NOT NULL,
    "project" TEXT,
    "firstBlock" INTEGER DEFAULT 0,
    "previousBlock" INTEGER DEFAULT 0,
    "lastBlock" INTEGER DEFAULT 0,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transfer" (
    "id" TEXT NOT NULL,
    "project" TEXT,
    "amount" DOUBLE PRECISION DEFAULT 0,
    "type" INTEGER,
    "address" TEXT NOT NULL DEFAULT E'',
    "fromAddress" TEXT NOT NULL DEFAULT E'',
    "toAddress" TEXT NOT NULL DEFAULT E'',
    "hash" TEXT NOT NULL DEFAULT E'',
    "block" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Transfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Holder" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT E'',
    "balance" DOUBLE PRECISION DEFAULT 0,
    "note" TEXT NOT NULL DEFAULT E'',
    "isContract" BOOLEAN NOT NULL DEFAULT false,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Holder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Role_users" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StableLiquidityPair_pairToken" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Holder_projects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Holder_transfers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_holders" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Transfer_holders" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Payment_billedTo_idx" ON "Payment"("billedTo");

-- CreateIndex
CREATE INDEX "Project_network_idx" ON "Project"("network");

-- CreateIndex
CREATE INDEX "Project_user_idx" ON "Project"("user");

-- CreateIndex
CREATE INDEX "Notification_project_idx" ON "Notification"("project");

-- CreateIndex
CREATE INDEX "MarketStat_project_idx" ON "MarketStat"("project");

-- CreateIndex
CREATE INDEX "LiquidityPair_stablePair_idx" ON "LiquidityPair"("stablePair");

-- CreateIndex
CREATE INDEX "LiquidityPair_network_idx" ON "LiquidityPair"("network");

-- CreateIndex
CREATE INDEX "LiquidityPair_project_idx" ON "LiquidityPair"("project");

-- CreateIndex
CREATE INDEX "LiquidityPair_exchange_idx" ON "LiquidityPair"("exchange");

-- CreateIndex
CREATE INDEX "Token_network_idx" ON "Token"("network");

-- CreateIndex
CREATE INDEX "StableLiquidityPair_network_idx" ON "StableLiquidityPair"("network");

-- CreateIndex
CREATE INDEX "DiscordBot_project_idx" ON "DiscordBot"("project");

-- CreateIndex
CREATE INDEX "Content_contentType_idx" ON "Content"("contentType");

-- CreateIndex
CREATE INDEX "Content_blockName_idx" ON "Content"("blockName");

-- CreateIndex
CREATE INDEX "Block_project_idx" ON "Block"("project");

-- CreateIndex
CREATE INDEX "Transfer_project_idx" ON "Transfer"("project");

-- CreateIndex
CREATE UNIQUE INDEX "_Role_users_AB_unique" ON "_Role_users"("A", "B");

-- CreateIndex
CREATE INDEX "_Role_users_B_index" ON "_Role_users"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_tags_AB_unique" ON "_Project_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_tags_B_index" ON "_Project_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StableLiquidityPair_pairToken_AB_unique" ON "_StableLiquidityPair_pairToken"("A", "B");

-- CreateIndex
CREATE INDEX "_StableLiquidityPair_pairToken_B_index" ON "_StableLiquidityPair_pairToken"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Holder_projects_AB_unique" ON "_Holder_projects"("A", "B");

-- CreateIndex
CREATE INDEX "_Holder_projects_B_index" ON "_Holder_projects"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Holder_transfers_AB_unique" ON "_Holder_transfers"("A", "B");

-- CreateIndex
CREATE INDEX "_Holder_transfers_B_index" ON "_Holder_transfers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_holders_AB_unique" ON "_Project_holders"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_holders_B_index" ON "_Project_holders"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Transfer_holders_AB_unique" ON "_Transfer_holders"("A", "B");

-- CreateIndex
CREATE INDEX "_Transfer_holders_B_index" ON "_Transfer_holders"("B");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_billedTo_fkey" FOREIGN KEY ("billedTo") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_network_fkey" FOREIGN KEY ("network") REFERENCES "Network"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketStat" ADD CONSTRAINT "MarketStat_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidityPair" ADD CONSTRAINT "LiquidityPair_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidityPair" ADD CONSTRAINT "LiquidityPair_exchange_fkey" FOREIGN KEY ("exchange") REFERENCES "Exchange"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidityPair" ADD CONSTRAINT "LiquidityPair_network_fkey" FOREIGN KEY ("network") REFERENCES "Network"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidityPair" ADD CONSTRAINT "LiquidityPair_stablePair_fkey" FOREIGN KEY ("stablePair") REFERENCES "StableLiquidityPair"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_network_fkey" FOREIGN KEY ("network") REFERENCES "Network"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StableLiquidityPair" ADD CONSTRAINT "StableLiquidityPair_network_fkey" FOREIGN KEY ("network") REFERENCES "Network"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordBot" ADD CONSTRAINT "DiscordBot_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_blockName_fkey" FOREIGN KEY ("blockName") REFERENCES "ContentBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_contentType_fkey" FOREIGN KEY ("contentType") REFERENCES "ContentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Role_users" ADD CONSTRAINT "_Role_users_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Role_users" ADD CONSTRAINT "_Role_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_tags" ADD CONSTRAINT "_Project_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_tags" ADD CONSTRAINT "_Project_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StableLiquidityPair_pairToken" ADD CONSTRAINT "_StableLiquidityPair_pairToken_A_fkey" FOREIGN KEY ("A") REFERENCES "StableLiquidityPair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StableLiquidityPair_pairToken" ADD CONSTRAINT "_StableLiquidityPair_pairToken_B_fkey" FOREIGN KEY ("B") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Holder_projects" ADD CONSTRAINT "_Holder_projects_A_fkey" FOREIGN KEY ("A") REFERENCES "Holder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Holder_projects" ADD CONSTRAINT "_Holder_projects_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Holder_transfers" ADD CONSTRAINT "_Holder_transfers_A_fkey" FOREIGN KEY ("A") REFERENCES "Holder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Holder_transfers" ADD CONSTRAINT "_Holder_transfers_B_fkey" FOREIGN KEY ("B") REFERENCES "Transfer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_holders" ADD CONSTRAINT "_Project_holders_A_fkey" FOREIGN KEY ("A") REFERENCES "Holder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_holders" ADD CONSTRAINT "_Project_holders_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Transfer_holders" ADD CONSTRAINT "_Transfer_holders_A_fkey" FOREIGN KEY ("A") REFERENCES "Holder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Transfer_holders" ADD CONSTRAINT "_Transfer_holders_B_fkey" FOREIGN KEY ("B") REFERENCES "Transfer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
