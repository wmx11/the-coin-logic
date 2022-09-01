/*
  Warnings:

  - You are about to drop the column `emailVerificationExpiresIn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerificationString` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerificationExpiresIn",
DROP COLUMN "emailVerificationString";
