-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isModerator" BOOLEAN NOT NULL DEFAULT false,
    "isSubscribedToEmail" BOOLEAN NOT NULL DEFAULT false,
    "subscribedTill" DATETIME,
    "referrer" TEXT NOT NULL DEFAULT '',
    "dateCreated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
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
    "contractAddress" TEXT NOT NULL DEFAULT '',
    "pairAddress" TEXT NOT NULL DEFAULT '',
    "burnAddress" TEXT NOT NULL DEFAULT '0x000000000000000000000000000000000000dead',
    "network" TEXT,
    "trackHoldersFromTokenAmount" REAL DEFAULT 0,
    "description" TEXT NOT NULL DEFAULT '',
    "launchDate" DATETIME,
    "launchBlock" INTEGER,
    "trackFromBlock" INTEGER,
    "ABI" TEXT,
    "customData" TEXT DEFAULT '[]',
    "sellTax" REAL,
    "buyTax" REAL,
    "rebasePeriod" TEXT NOT NULL DEFAULT '',
    "apy" REAL,
    "dailyApy" REAL,
    "website" TEXT NOT NULL DEFAULT '',
    "whitepaper" TEXT NOT NULL DEFAULT '',
    "twitter" TEXT NOT NULL DEFAULT '',
    "telegram" TEXT NOT NULL DEFAULT '',
    "discord" TEXT NOT NULL DEFAULT '',
    "reddit" TEXT NOT NULL DEFAULT '',
    "youtube" TEXT NOT NULL DEFAULT '',
    "github" TEXT NOT NULL DEFAULT '',
    "medium" TEXT NOT NULL DEFAULT '',
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Project_network_fkey" FOREIGN KEY ("network") REFERENCES "Network" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exchange" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "logo_filesize" INTEGER,
    "logo_extension" TEXT,
    "logo_width" INTEGER,
    "logo_height" INTEGER,
    "logo_id" TEXT,
    "url" TEXT NOT NULL DEFAULT '',
    "tradeUrl" TEXT NOT NULL DEFAULT '',
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "LiquidityPair" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "stablePair" TEXT,
    "network" TEXT,
    "project" TEXT,
    "exchange" TEXT,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LiquidityPair_project_fkey" FOREIGN KEY ("project") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LiquidityPair_exchange_fkey" FOREIGN KEY ("exchange") REFERENCES "Exchange" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LiquidityPair_stablePair_fkey" FOREIGN KEY ("stablePair") REFERENCES "StableLiquidityPair" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LiquidityPair_network_fkey" FOREIGN KEY ("network") REFERENCES "Network" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StableLiquidityPair" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "network" TEXT,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StableLiquidityPair_network_fkey" FOREIGN KEY ("network") REFERENCES "Network" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "ABI" TEXT,
    "network" TEXT,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Token_network_fkey" FOREIGN KEY ("network") REFERENCES "Network" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Network" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "logo_filesize" INTEGER,
    "logo_extension" TEXT,
    "logo_width" INTEGER,
    "logo_height" INTEGER,
    "logo_id" TEXT,
    "url" TEXT NOT NULL DEFAULT '',
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "MarketStat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" REAL,
    "marketCap" REAL,
    "totalSupply" REAL,
    "liquidity" REAL,
    "pairPrice" REAL,
    "holders" REAL,
    "avgHoldings" REAL,
    "newHolders" REAL,
    "leavingHolders" REAL,
    "recurringHolders" REAL,
    "customData" TEXT DEFAULT '[]',
    "project" TEXT,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MarketStat_project_fkey" FOREIGN KEY ("project") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DiscordBot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "presence" TEXT NOT NULL DEFAULT '',
    "botId" TEXT NOT NULL DEFAULT '',
    "apiKey" TEXT NOT NULL DEFAULT '',
    "tracking" TEXT,
    "customTracking" TEXT NOT NULL DEFAULT '',
    "project" TEXT,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DiscordBot_project_fkey" FOREIGN KEY ("project") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Roadmap" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL DEFAULT '',
    "estimated" TEXT NOT NULL DEFAULT '',
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "slug" TEXT NOT NULL DEFAULT '',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "blockName" TEXT,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Content_blockName_fkey" FOREIGN KEY ("blockName") REFERENCES "ContentBlock" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContentBlock" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "blockName" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "dateAdded" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "_Project_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Project_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Project_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_User_projects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_User_projects_A_fkey" FOREIGN KEY ("A") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_User_projects_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Project_liquidityPair" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Project_liquidityPair_A_fkey" FOREIGN KEY ("A") REFERENCES "LiquidityPair" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Project_liquidityPair_B_fkey" FOREIGN KEY ("B") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_StableLiquidityPair_pairToken" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_StableLiquidityPair_pairToken_A_fkey" FOREIGN KEY ("A") REFERENCES "StableLiquidityPair" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_StableLiquidityPair_pairToken_B_fkey" FOREIGN KEY ("B") REFERENCES "Token" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_User_referralCode" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_User_referralCode_A_fkey" FOREIGN KEY ("A") REFERENCES "Referral" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_User_referralCode_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Project_network_idx" ON "Project"("network");

-- CreateIndex
CREATE INDEX "LiquidityPair_stablePair_idx" ON "LiquidityPair"("stablePair");

-- CreateIndex
CREATE INDEX "LiquidityPair_network_idx" ON "LiquidityPair"("network");

-- CreateIndex
CREATE INDEX "LiquidityPair_project_idx" ON "LiquidityPair"("project");

-- CreateIndex
CREATE INDEX "LiquidityPair_exchange_idx" ON "LiquidityPair"("exchange");

-- CreateIndex
CREATE INDEX "StableLiquidityPair_network_idx" ON "StableLiquidityPair"("network");

-- CreateIndex
CREATE INDEX "Token_network_idx" ON "Token"("network");

-- CreateIndex
CREATE INDEX "MarketStat_project_idx" ON "MarketStat"("project");

-- CreateIndex
CREATE INDEX "DiscordBot_project_idx" ON "DiscordBot"("project");

-- CreateIndex
CREATE INDEX "Content_blockName_idx" ON "Content"("blockName");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_tags_AB_unique" ON "_Project_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_tags_B_index" ON "_Project_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_User_projects_AB_unique" ON "_User_projects"("A", "B");

-- CreateIndex
CREATE INDEX "_User_projects_B_index" ON "_User_projects"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_liquidityPair_AB_unique" ON "_Project_liquidityPair"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_liquidityPair_B_index" ON "_Project_liquidityPair"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StableLiquidityPair_pairToken_AB_unique" ON "_StableLiquidityPair_pairToken"("A", "B");

-- CreateIndex
CREATE INDEX "_StableLiquidityPair_pairToken_B_index" ON "_StableLiquidityPair_pairToken"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_User_referralCode_AB_unique" ON "_User_referralCode"("A", "B");

-- CreateIndex
CREATE INDEX "_User_referralCode_B_index" ON "_User_referralCode"("B");
