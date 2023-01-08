/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Provider_user_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Provider_user_key" ON "Provider"("user");
