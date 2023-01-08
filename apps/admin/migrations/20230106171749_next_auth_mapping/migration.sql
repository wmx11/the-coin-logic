/*
  Warnings:

  - You are about to drop the column `user` on the `sessions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_fkey";

-- DropIndex
DROP INDEX "sessions_user_idx";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "user",
ADD COLUMN     "user_id" TEXT;

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "sessions"("user_id");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
