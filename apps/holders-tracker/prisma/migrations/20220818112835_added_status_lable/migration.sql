-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL DEFAULT '',
    "projectId" TEXT NOT NULL DEFAULT '',
    "contractAddress" TEXT NOT NULL DEFAULT '',
    "rpc" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'idle',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isRebasing" BOOLEAN NOT NULL DEFAULT false,
    "trackHolders" BOOLEAN NOT NULL DEFAULT false,
    "initialized" BOOLEAN NOT NULL DEFAULT false,
    "initializedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Projects" ("contractAddress", "createdAt", "enabled", "id", "initialized", "initializedAt", "isRebasing", "projectId", "rpc", "slug", "trackHolders", "updatedAt") SELECT "contractAddress", "createdAt", "enabled", "id", "initialized", "initializedAt", "isRebasing", "projectId", "rpc", "slug", "trackHolders", "updatedAt" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
