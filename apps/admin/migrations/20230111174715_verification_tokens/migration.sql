/*
  Warnings:

  - You are about to drop the column `identifier` on the `verificationtokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isVerified" SET DEFAULT false;

-- AlterTable
ALTER TABLE "verificationtokens" DROP COLUMN "identifier",
ADD COLUMN     "user" TEXT;

-- CreateIndex
CREATE INDEX "verificationtokens_user_idx" ON "verificationtokens"("user");

-- AddForeignKey
ALTER TABLE "verificationtokens" ADD CONSTRAINT "verificationtokens_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
