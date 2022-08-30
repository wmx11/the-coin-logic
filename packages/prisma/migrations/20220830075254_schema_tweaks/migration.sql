/*
  Warnings:

  - You are about to drop the column `projectsId` on the `Holders` table. All the data in the column will be lost.
  - You are about to drop the column `transfersId` on the `Holders` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Holders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "balance" REAL NOT NULL DEFAULT 0,
    "note" TEXT NOT NULL DEFAULT '',
    "isContract" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Holders" ("address", "balance", "createdAt", "id", "isContract", "note", "projectId", "updatedAt") SELECT "address", "balance", "createdAt", "id", "isContract", "note", "projectId", "updatedAt" FROM "Holders";
DROP TABLE "Holders";
ALTER TABLE "new_Holders" RENAME TO "Holders";
CREATE INDEX "Holders_projectId_idx" ON "Holders"("projectId");
CREATE INDEX "Holders_address_idx" ON "Holders"("address");
CREATE INDEX "Holders_createdAt_idx" ON "Holders"("createdAt");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE INDEX "Transfers_toAddress_idx" ON "Transfers"("toAddress");
