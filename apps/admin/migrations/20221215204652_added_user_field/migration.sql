-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "user" TEXT;

-- CreateIndex
CREATE INDEX "Quiz_user_idx" ON "Quiz"("user");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
