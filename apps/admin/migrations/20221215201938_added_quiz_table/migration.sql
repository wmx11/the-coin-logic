-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "imageUrl" TEXT NOT NULL DEFAULT E'',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "hasRewards" BOOLEAN NOT NULL DEFAULT false,
    "rewardsAmount" INTEGER,
    "rewardType" TEXT NOT NULL DEFAULT E'',
    "description" JSONB,
    "onWinDescription" JSONB,
    "onEndDescription" JSONB,
    "config" JSONB,
    "totalWinners" INTEGER,
    "winners" INTEGER,
    "views" INTEGER,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Quiz_likes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Quiz_project_idx" ON "Quiz"("project");

-- CreateIndex
CREATE UNIQUE INDEX "_Quiz_likes_AB_unique" ON "_Quiz_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_Quiz_likes_B_index" ON "_Quiz_likes"("B");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Quiz_likes" ADD CONSTRAINT "_Quiz_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Quiz_likes" ADD CONSTRAINT "_Quiz_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
