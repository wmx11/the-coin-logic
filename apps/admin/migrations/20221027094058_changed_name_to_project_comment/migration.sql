/*
  Warnings:

  - You are about to drop the `ProjectReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectReview" DROP CONSTRAINT "ProjectReview_project_fkey";

-- DropForeignKey
ALTER TABLE "ProjectReview" DROP CONSTRAINT "ProjectReview_user_fkey";

-- DropTable
DROP TABLE "ProjectReview";

-- CreateTable
CREATE TABLE "ProjectComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL DEFAULT E'',
    "user" TEXT,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ProjectComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProjectComment_user_idx" ON "ProjectComment"("user");

-- CreateIndex
CREATE INDEX "ProjectComment_project_idx" ON "ProjectComment"("project");

-- AddForeignKey
ALTER TABLE "ProjectComment" ADD CONSTRAINT "ProjectComment_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectComment" ADD CONSTRAINT "ProjectComment_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
