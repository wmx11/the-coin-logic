-- CreateTable
CREATE TABLE "DiscordConfig" (
    "id" TEXT NOT NULL,
    "guildName" TEXT NOT NULL DEFAULT E'',
    "guildId" TEXT NOT NULL DEFAULT E'',
    "announcementsChannelId" TEXT NOT NULL DEFAULT E'',
    "announcementsChannelName" TEXT NOT NULL DEFAULT E'',
    "generalChannelId" TEXT NOT NULL DEFAULT E'',
    "generalChannelName" TEXT NOT NULL DEFAULT E'',
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "DiscordConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordAnnouncement" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL DEFAULT E'',
    "guildId" TEXT NOT NULL DEFAULT E'',
    "channelId" TEXT NOT NULL DEFAULT E'',
    "title" TEXT NOT NULL DEFAULT E'',
    "content" JSONB,
    "messageUrl" TEXT NOT NULL DEFAULT E'',
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "DiscordAnnouncement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordConfig_project_key" ON "DiscordConfig"("project");

-- CreateIndex
CREATE INDEX "DiscordAnnouncement_project_idx" ON "DiscordAnnouncement"("project");

-- AddForeignKey
ALTER TABLE "DiscordConfig" ADD CONSTRAINT "DiscordConfig_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordAnnouncement" ADD CONSTRAINT "DiscordAnnouncement_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
