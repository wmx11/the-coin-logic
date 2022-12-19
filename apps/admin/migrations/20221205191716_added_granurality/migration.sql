-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "displayCommunityComments" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "displayCommunityVotes" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "trackMarketCap" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "trackPrice" BOOLEAN NOT NULL DEFAULT false;
