-- AlterTable
ALTER TABLE "Transcription" ADD COLUMN     "project" TEXT;

-- CreateIndex
CREATE INDEX "Transcription_project_idx" ON "Transcription"("project");

-- AddForeignKey
ALTER TABLE "Transcription" ADD CONSTRAINT "Transcription_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
