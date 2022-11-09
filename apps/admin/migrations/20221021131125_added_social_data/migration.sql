-- CreateTable
CREATE TABLE "SocialStat" (
    "id" TEXT NOT NULL,
    "twitter" DOUBLE PRECISION,
    "telegram" DOUBLE PRECISION,
    "discord" DOUBLE PRECISION,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SocialStat_project_idx" ON "SocialStat"("project");

-- AddForeignKey
ALTER TABLE "SocialStat" ADD CONSTRAINT "SocialStat_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
