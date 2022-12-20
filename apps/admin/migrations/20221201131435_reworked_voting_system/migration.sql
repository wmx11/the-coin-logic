/*
  Warnings:

  - You are about to drop the `CreatorRating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectRating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreatorRating" DROP CONSTRAINT "CreatorRating_creator_fkey";

-- DropForeignKey
ALTER TABLE "CreatorRating" DROP CONSTRAINT "CreatorRating_user_fkey";

-- DropForeignKey
ALTER TABLE "ProjectRating" DROP CONSTRAINT "ProjectRating_project_fkey";

-- DropForeignKey
ALTER TABLE "ProjectRating" DROP CONSTRAINT "ProjectRating_user_fkey";

-- DropTable
DROP TABLE "CreatorRating";

-- DropTable
DROP TABLE "ProjectRating";

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "vote" INTEGER DEFAULT 0,
    "ip" TEXT NOT NULL DEFAULT E'',
    "type" TEXT,
    "user" TEXT,
    "project" TEXT,
    "creator" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Vote_user_idx" ON "Vote"("user");

-- CreateIndex
CREATE INDEX "Vote_project_idx" ON "Vote"("project");

-- CreateIndex
CREATE INDEX "Vote_creator_idx" ON "Vote"("creator");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
