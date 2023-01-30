/*
  Warnings:

  - You are about to drop the column `calendar` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "calendar",
ADD COLUMN     "mintPrice" DOUBLE PRECISION;
