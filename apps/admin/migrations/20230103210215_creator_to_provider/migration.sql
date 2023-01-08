/*
  Warnings:

  - You are about to drop the column `creator` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `followedCreators` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `creator` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the `Creator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Creator_tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_creator_fkey";

-- DropForeignKey
ALTER TABLE "Creator" DROP CONSTRAINT "Creator_user_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_followedCreators_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_creator_fkey";

-- DropForeignKey
ALTER TABLE "_Creator_tags" DROP CONSTRAINT "_Creator_tags_A_fkey";

-- DropForeignKey
ALTER TABLE "_Creator_tags" DROP CONSTRAINT "_Creator_tags_B_fkey";

-- DropIndex
DROP INDEX "Comment_creator_idx";

-- DropIndex
DROP INDEX "User_followedCreators_idx";

-- DropIndex
DROP INDEX "Vote_creator_idx";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "creator",
ADD COLUMN     "provider" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "followedCreators",
ADD COLUMN     "followedProviders" TEXT;

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "creator",
ADD COLUMN     "provider" TEXT;

-- DropTable
DROP TABLE "Creator";

-- DropTable
DROP TABLE "_Creator_tags";

-- CreateTable
CREATE TABLE "Provider" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "contactEmail" TEXT NOT NULL DEFAULT E'',
    "isPromoted" BOOLEAN NOT NULL DEFAULT false,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isListed" BOOLEAN NOT NULL DEFAULT false,
    "displayEmail" BOOLEAN NOT NULL DEFAULT false,
    "openForWork" BOOLEAN NOT NULL DEFAULT false,
    "displayPrices" BOOLEAN NOT NULL DEFAULT false,
    "nickname" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "summary" TEXT NOT NULL DEFAULT E'',
    "about" TEXT NOT NULL DEFAULT E'',
    "offers" TEXT NOT NULL DEFAULT E'',
    "website" TEXT NOT NULL DEFAULT E'',
    "twitter" TEXT NOT NULL DEFAULT E'',
    "telegram" TEXT NOT NULL DEFAULT E'',
    "discord" TEXT NOT NULL DEFAULT E'',
    "reddit" TEXT NOT NULL DEFAULT E'',
    "youtube" TEXT NOT NULL DEFAULT E'',
    "priceFrom" DOUBLE PRECISION,
    "priceTo" DOUBLE PRECISION,
    "views" DOUBLE PRECISION,
    "user" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Provider_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Provider_user_idx" ON "Provider"("user");

-- CreateIndex
CREATE UNIQUE INDEX "_Provider_tags_AB_unique" ON "_Provider_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Provider_tags_B_index" ON "_Provider_tags"("B");

-- CreateIndex
CREATE INDEX "Comment_provider_idx" ON "Comment"("provider");

-- CreateIndex
CREATE INDEX "User_followedProviders_idx" ON "User"("followedProviders");

-- CreateIndex
CREATE INDEX "Vote_provider_idx" ON "Vote"("provider");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_followedProviders_fkey" FOREIGN KEY ("followedProviders") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_provider_fkey" FOREIGN KEY ("provider") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_provider_fkey" FOREIGN KEY ("provider") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Provider_tags" ADD CONSTRAINT "_Provider_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Provider_tags" ADD CONSTRAINT "_Provider_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
