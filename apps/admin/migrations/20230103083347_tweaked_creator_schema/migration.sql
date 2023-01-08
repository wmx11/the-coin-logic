/*
  Warnings:

  - You are about to drop the column `description` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `creator` on the `MarketingCampaign` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MarketingCampaign" DROP CONSTRAINT "MarketingCampaign_creator_fkey";

-- DropIndex
DROP INDEX "MarketingCampaign_creator_idx";

-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "description",
ADD COLUMN     "about" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "contactEmail" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "displayEmail" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "displayPrices" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPromoted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "offers" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "openForWork" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "summary" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "user" TEXT,
ADD COLUMN     "views" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "MarketingCampaign" DROP COLUMN "creator";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "followedCreators" TEXT;

-- CreateTable
CREATE TABLE "_Creator_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Creator_tags_AB_unique" ON "_Creator_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Creator_tags_B_index" ON "_Creator_tags"("B");

-- CreateIndex
CREATE INDEX "Creator_user_idx" ON "Creator"("user");

-- CreateIndex
CREATE INDEX "User_followedCreators_idx" ON "User"("followedCreators");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_followedCreators_fkey" FOREIGN KEY ("followedCreators") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creator" ADD CONSTRAINT "Creator_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Creator_tags" ADD CONSTRAINT "_Creator_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Creator_tags" ADD CONSTRAINT "_Creator_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
