/*
  Warnings:

  - You are about to drop the column `likes` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `reports` on the `Comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "likes",
DROP COLUMN "reports";

-- CreateTable
CREATE TABLE "_Comment_likes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Comment_reports" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Comment_likes_AB_unique" ON "_Comment_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_Comment_likes_B_index" ON "_Comment_likes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Comment_reports_AB_unique" ON "_Comment_reports"("A", "B");

-- CreateIndex
CREATE INDEX "_Comment_reports_B_index" ON "_Comment_reports"("B");

-- AddForeignKey
ALTER TABLE "_Comment_likes" ADD CONSTRAINT "_Comment_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Comment_likes" ADD CONSTRAINT "_Comment_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Comment_reports" ADD CONSTRAINT "_Comment_reports_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Comment_reports" ADD CONSTRAINT "_Comment_reports_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
