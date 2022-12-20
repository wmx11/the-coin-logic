-- CreateTable
CREATE TABLE "DiscordEvent" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL DEFAULT E'',
    "guildId" TEXT NOT NULL DEFAULT E'',
    "channelId" TEXT NOT NULL DEFAULT E'',
    "name" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "scheduledStartTimestamp" TIMESTAMP(3),
    "scheduledEndTimestamp" TIMESTAMP(3),
    "location" TEXT NOT NULL DEFAULT E'',
    "userCount" INTEGER,
    "imageId" TEXT NOT NULL DEFAULT E'',
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "DiscordEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DiscordEvent_project_idx" ON "DiscordEvent"("project");

-- AddForeignKey
ALTER TABLE "DiscordEvent" ADD CONSTRAINT "DiscordEvent_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
