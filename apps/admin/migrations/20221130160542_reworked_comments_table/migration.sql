/*
  Warnings:

  - You are about to drop the `CreatorReview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectComment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreatorReview" DROP CONSTRAINT "CreatorReview_creator_fkey";

-- DropForeignKey
ALTER TABLE "CreatorReview" DROP CONSTRAINT "CreatorReview_user_fkey";

-- DropForeignKey
ALTER TABLE "ProjectComment" DROP CONSTRAINT "ProjectComment_project_fkey";

-- DropForeignKey
ALTER TABLE "ProjectComment" DROP CONSTRAINT "ProjectComment_user_fkey";

-- DropTable
DROP TABLE "CreatorReview";

-- DropTable
DROP TABLE "ProjectComment";

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" JSONB,
    "sentiment" INTEGER DEFAULT 1,
    "likes" INTEGER DEFAULT 0,
    "reports" INTEGER DEFAULT 0,
    "user" TEXT,
    "project" TEXT,
    "creator" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comment_user_idx" ON "Comment"("user");

-- CreateIndex
CREATE INDEX "Comment_project_idx" ON "Comment"("project");

-- CreateIndex
CREATE INDEX "Comment_creator_idx" ON "Comment"("creator");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_creator_fkey" FOREIGN KEY ("creator") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
