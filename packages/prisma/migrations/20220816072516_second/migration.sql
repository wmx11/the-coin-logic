-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Holders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "balance" REAL NOT NULL DEFAULT 0,
    "note" TEXT NOT NULL DEFAULT '',
    "isContract" BOOLEAN NOT NULL DEFAULT false,
    "projectsId" TEXT,
    "transfersId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Holders_transfersId_fkey" FOREIGN KEY ("transfersId") REFERENCES "Transfers" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Holders_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Holders" ("address", "balance", "createdAt", "id", "isContract", "note", "projectId", "transfersId", "updatedAt") SELECT "address", "balance", "createdAt", "id", "isContract", "note", "projectId", "transfersId", "updatedAt" FROM "Holders";
DROP TABLE "Holders";
ALTER TABLE "new_Holders" RENAME TO "Holders";
CREATE INDEX "Holders_projectId_idx" ON "Holders"("projectId");
CREATE INDEX "Holders_address_idx" ON "Holders"("address");
CREATE INDEX "Holders_transfersId_idx" ON "Holders"("transfersId");
CREATE INDEX "Holders_createdAt_idx" ON "Holders"("createdAt");
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "contractAddress" TEXT NOT NULL DEFAULT '',
    "rpc" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isRebasing" BOOLEAN NOT NULL DEFAULT false,
    "trackHolders" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Projects" ("createdAt", "enabled", "id", "isRebasing", "projectId", "trackHolders", "updatedAt") SELECT "createdAt", "enabled", "id", "isRebasing", "projectId", "trackHolders", "updatedAt" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
