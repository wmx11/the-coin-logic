-- AlterTable
ALTER TABLE "DiscordEvent" ADD COLUMN     "channelName" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "guildName" TEXT NOT NULL DEFAULT E'';
