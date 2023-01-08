/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `ServiceToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ServiceToken_user_idx";

-- CreateIndex
CREATE UNIQUE INDEX "ServiceToken_user_key" ON "ServiceToken"("user");
