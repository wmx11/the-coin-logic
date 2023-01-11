-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "discordHandle" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "openForApplications" BOOLEAN NOT NULL DEFAULT false;
