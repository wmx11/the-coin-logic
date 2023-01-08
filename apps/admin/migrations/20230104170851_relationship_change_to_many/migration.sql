/*
  Warnings:

  - You are about to drop the column `followedProviders` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_followedProviders_fkey";

-- DropIndex
DROP INDEX "User_followedProviders_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "followedProviders";

-- CreateTable
CREATE TABLE "_Provider_followers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Provider_followers_AB_unique" ON "_Provider_followers"("A", "B");

-- CreateIndex
CREATE INDEX "_Provider_followers_B_index" ON "_Provider_followers"("B");

-- AddForeignKey
ALTER TABLE "_Provider_followers" ADD CONSTRAINT "_Provider_followers_A_fkey" FOREIGN KEY ("A") REFERENCES "Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Provider_followers" ADD CONSTRAINT "_Provider_followers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
