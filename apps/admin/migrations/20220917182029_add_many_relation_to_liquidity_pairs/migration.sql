/*
  Warnings:

  - You are about to drop the column `project` on the `LiquidityPair` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "LiquidityPair" DROP CONSTRAINT "LiquidityPair_project_fkey";

-- DropIndex
DROP INDEX "LiquidityPair_project_idx";

-- AlterTable
ALTER TABLE "LiquidityPair" DROP COLUMN "project";

-- CreateTable
CREATE TABLE "_LiquidityPair_project" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LiquidityPair_project_AB_unique" ON "_LiquidityPair_project"("A", "B");

-- CreateIndex
CREATE INDEX "_LiquidityPair_project_B_index" ON "_LiquidityPair_project"("B");

-- AddForeignKey
ALTER TABLE "_LiquidityPair_project" ADD CONSTRAINT "_LiquidityPair_project_A_fkey" FOREIGN KEY ("A") REFERENCES "LiquidityPair"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LiquidityPair_project" ADD CONSTRAINT "_LiquidityPair_project_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
