-- AlterTable
ALTER TABLE "Transcription" ADD COLUMN     "views" INTEGER;

-- CreateTable
CREATE TABLE "_Transcription_likes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Transcription_likes_AB_unique" ON "_Transcription_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_Transcription_likes_B_index" ON "_Transcription_likes"("B");

-- AddForeignKey
ALTER TABLE "_Transcription_likes" ADD CONSTRAINT "_Transcription_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Transcription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Transcription_likes" ADD CONSTRAINT "_Transcription_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
