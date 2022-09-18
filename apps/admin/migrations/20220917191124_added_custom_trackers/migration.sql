/*
  Warnings:

  - You are about to drop the column `customData` on the `MarketStat` table. All the data in the column will be lost.
  - You are about to drop the column `customData` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MarketStat" DROP COLUMN "customData",
ADD COLUMN     "customTrackers" JSONB DEFAULT '[]';

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "customData";

-- CreateTable
CREATE TABLE "CustomTracker" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "address" TEXT NOT NULL DEFAULT E'',
    "pairAddress" TEXT NOT NULL DEFAULT E'',
    "getBalanceOf" TEXT NOT NULL DEFAULT E'',
    "decimals" DOUBLE PRECISION DEFAULT 18,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "useDexScreener" BOOLEAN NOT NULL DEFAULT false,
    "method" TEXT,
    "network" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Project_relatedProjects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CustomTracker_project" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "CustomTracker_network_idx" ON "CustomTracker"("network");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_relatedProjects_AB_unique" ON "_Project_relatedProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_relatedProjects_B_index" ON "_Project_relatedProjects"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomTracker_project_AB_unique" ON "_CustomTracker_project"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomTracker_project_B_index" ON "_CustomTracker_project"("B");

-- AddForeignKey
ALTER TABLE "CustomTracker" ADD CONSTRAINT "CustomTracker_network_fkey" FOREIGN KEY ("network") REFERENCES "Network"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_relatedProjects" ADD CONSTRAINT "_Project_relatedProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_relatedProjects" ADD CONSTRAINT "_Project_relatedProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomTracker_project" ADD CONSTRAINT "_CustomTracker_project_A_fkey" FOREIGN KEY ("A") REFERENCES "CustomTracker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomTracker_project" ADD CONSTRAINT "_CustomTracker_project_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
