/*
  Warnings:

  - You are about to drop the column `imageId` on the `DiscordEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiscordEvent" DROP COLUMN "imageId",
ADD COLUMN     "image" TEXT NOT NULL DEFAULT E'';
