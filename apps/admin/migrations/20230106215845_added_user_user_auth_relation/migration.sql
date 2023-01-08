/*
  Warnings:

  - A unique constraint covering the columns `[userAuth]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userAuth" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_userAuth_key" ON "User"("userAuth");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userAuth_fkey" FOREIGN KEY ("userAuth") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
