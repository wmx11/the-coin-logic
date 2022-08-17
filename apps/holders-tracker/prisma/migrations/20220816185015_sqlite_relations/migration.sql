-- CreateTable
CREATE TABLE "_HoldersToProjects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_HoldersToProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Holders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HoldersToProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_HoldersToTransfers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_HoldersToTransfers_A_fkey" FOREIGN KEY ("A") REFERENCES "Holders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_HoldersToTransfers_B_fkey" FOREIGN KEY ("B") REFERENCES "Transfers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Holders" ("address", "balance", "createdAt", "id", "isContract", "note", "projectId", "projectsId", "transfersId", "updatedAt") SELECT "address", "balance", "createdAt", "id", "isContract", "note", "projectId", "projectsId", "transfersId", "updatedAt" FROM "Holders";
DROP TABLE "Holders";
ALTER TABLE "new_Holders" RENAME TO "Holders";
CREATE INDEX "Holders_projectId_idx" ON "Holders"("projectId");
CREATE INDEX "Holders_address_idx" ON "Holders"("address");
CREATE INDEX "Holders_transfersId_idx" ON "Holders"("transfersId");
CREATE INDEX "Holders_createdAt_idx" ON "Holders"("createdAt");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_HoldersToProjects_AB_unique" ON "_HoldersToProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_HoldersToProjects_B_index" ON "_HoldersToProjects"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HoldersToTransfers_AB_unique" ON "_HoldersToTransfers"("A", "B");

-- CreateIndex
CREATE INDEX "_HoldersToTransfers_B_index" ON "_HoldersToTransfers"("B");
