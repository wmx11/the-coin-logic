/*
  Warnings:

  - You are about to drop the column `isApproved` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "isApproved",
ADD COLUMN     "isAwaitingPayment" BOOLEAN NOT NULL DEFAULT false;
