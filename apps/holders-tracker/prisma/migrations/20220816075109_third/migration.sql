-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL DEFAULT '',
    "projectId" TEXT NOT NULL DEFAULT '',
    "contractAddress" TEXT NOT NULL DEFAULT '',
    "rpc" TEXT NOT NULL DEFAULT '',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isRebasing" BOOLEAN NOT NULL DEFAULT false,
    "trackHolders" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Projects" ("contractAddress", "createdAt", "enabled", "id", "isRebasing", "projectId", "rpc", "trackHolders", "updatedAt") SELECT "contractAddress", "createdAt", "enabled", "id", "isRebasing", "projectId", "rpc", "trackHolders", "updatedAt" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
