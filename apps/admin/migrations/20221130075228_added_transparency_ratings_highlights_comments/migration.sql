/*
  Warnings:

  - You are about to drop the column `comment` on the `ProjectComment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "project" TEXT;

-- AlterTable
ALTER TABLE "LiquidityPair" ADD COLUMN     "customExchangeAddress" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "ProjectComment" DROP COLUMN "comment",
ADD COLUMN     "content" JSONB,
ADD COLUMN     "likes" INTEGER DEFAULT 0,
ADD COLUMN     "reports" INTEGER DEFAULT 0,
ADD COLUMN     "sentiment" INTEGER DEFAULT 0;

-- CreateTable
CREATE TABLE "TransparencyHighlight" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT E'',
    "isPositive" BOOLEAN NOT NULL DEFAULT false,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TransparencyHighlight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransparencyRating" (
    "id" TEXT NOT NULL,
    "rating" INTEGER DEFAULT 0,
    "ip" TEXT NOT NULL DEFAULT E'',
    "user" TEXT,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TransparencyRating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TransparencyHighlight_project_idx" ON "TransparencyHighlight"("project");

-- CreateIndex
CREATE INDEX "TransparencyHighlight_dateAdded_idx" ON "TransparencyHighlight"("dateAdded");

-- CreateIndex
CREATE INDEX "TransparencyRating_user_idx" ON "TransparencyRating"("user");

-- CreateIndex
CREATE INDEX "TransparencyRating_project_idx" ON "TransparencyRating"("project");

-- CreateIndex
CREATE INDEX "TransparencyRating_dateAdded_idx" ON "TransparencyRating"("dateAdded");

-- CreateIndex
CREATE INDEX "Content_project_idx" ON "Content"("project");

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransparencyHighlight" ADD CONSTRAINT "TransparencyHighlight_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransparencyRating" ADD CONSTRAINT "TransparencyRating_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransparencyRating" ADD CONSTRAINT "TransparencyRating_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
