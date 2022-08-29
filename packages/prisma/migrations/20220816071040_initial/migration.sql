-- CreateTable
CREATE TABLE "Blocks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "firstBlock" INTEGER NOT NULL DEFAULT 0,
    "previousBlock" INTEGER,
    "lastBlock" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Transfers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "amount" REAL NOT NULL DEFAULT 0,
    "type" INTEGER NOT NULL,
    "address" TEXT NOT NULL DEFAULT '',
    "fromAddress" TEXT NOT NULL DEFAULT '',
    "toAddress" TEXT NOT NULL DEFAULT '',
    "hash" TEXT NOT NULL DEFAULT '',
    "block" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isRebasing" BOOLEAN NOT NULL DEFAULT false,
    "trackHolders" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Holders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "balance" REAL NOT NULL DEFAULT 0,
    "note" TEXT NOT NULL DEFAULT '',
    "isContract" BOOLEAN NOT NULL DEFAULT false,
    "transfersId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Holders_transfersId_fkey" FOREIGN KEY ("transfersId") REFERENCES "Transfers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Transfers_projectId_idx" ON "Transfers"("projectId");

-- CreateIndex
CREATE INDEX "Transfers_address_idx" ON "Transfers"("address");

-- CreateIndex
CREATE INDEX "Transfers_type_idx" ON "Transfers"("type");

-- CreateIndex
CREATE INDEX "Transfers_createdAt_idx" ON "Transfers"("createdAt");

-- CreateIndex
CREATE INDEX "Holders_projectId_idx" ON "Holders"("projectId");

-- CreateIndex
CREATE INDEX "Holders_address_idx" ON "Holders"("address");

-- CreateIndex
CREATE INDEX "Holders_transfersId_idx" ON "Holders"("transfersId");

-- CreateIndex
CREATE INDEX "Holders_createdAt_idx" ON "Holders"("createdAt");
