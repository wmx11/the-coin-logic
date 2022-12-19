-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "views" INTEGER;

-- CreateTable
CREATE TABLE "_Content_likes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Content_likes_AB_unique" ON "_Content_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_Content_likes_B_index" ON "_Content_likes"("B");

-- AddForeignKey
ALTER TABLE "_Content_likes" ADD CONSTRAINT "_Content_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Content_likes" ADD CONSTRAINT "_Content_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
