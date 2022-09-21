/*
  Warnings:

  - You are about to drop the column `isRebasing` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "isRebasing",
ADD COLUMN     "exhangeAddress" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "periodicWalletUpdates" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "trackHoldersFromDollarAmount" DOUBLE PRECISION DEFAULT 0;
