/*
  Warnings:

  - You are about to drop the column `name` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isForListed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isForUnlisted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "name",
DROP COLUMN "slug";
