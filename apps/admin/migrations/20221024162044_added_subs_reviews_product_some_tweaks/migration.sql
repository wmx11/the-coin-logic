/*
  Warnings:

  - You are about to drop the column `subscribedTill` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CreatorRating" ADD COLUMN     "user" TEXT;

-- AlterTable
ALTER TABLE "CreatorReview" ADD COLUMN     "user" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "auditLink" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "kycLink" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "subscribedTill";

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "isFree" BOOLEAN NOT NULL DEFAULT false,
    "user" TEXT,
    "dateFrom" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateTo" TIMESTAMP(3),
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "isOneTime" BOOLEAN NOT NULL DEFAULT false,
    "isMonthly" BOOLEAN NOT NULL DEFAULT false,
    "price" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auditor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isListed" BOOLEAN NOT NULL DEFAULT false,
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "description" TEXT NOT NULL DEFAULT E'',
    "website" TEXT NOT NULL DEFAULT E'',
    "twitter" TEXT NOT NULL DEFAULT E'',
    "telegram" TEXT NOT NULL DEFAULT E'',
    "discord" TEXT NOT NULL DEFAULT E'',
    "reddit" TEXT NOT NULL DEFAULT E'',
    "youtube" TEXT NOT NULL DEFAULT E'',
    "priceFrom" DOUBLE PRECISION,
    "priceTo" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Auditor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KycGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "isListed" BOOLEAN NOT NULL DEFAULT false,
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "description" TEXT NOT NULL DEFAULT E'',
    "website" TEXT NOT NULL DEFAULT E'',
    "twitter" TEXT NOT NULL DEFAULT E'',
    "telegram" TEXT NOT NULL DEFAULT E'',
    "discord" TEXT NOT NULL DEFAULT E'',
    "reddit" TEXT NOT NULL DEFAULT E'',
    "youtube" TEXT NOT NULL DEFAULT E'',
    "priceFrom" DOUBLE PRECISION,
    "priceTo" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "KycGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectRating" (
    "id" TEXT NOT NULL,
    "rating" INTEGER DEFAULT 0,
    "user" TEXT,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ProjectRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectReview" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL DEFAULT E'',
    "user" TEXT,
    "project" TEXT,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ProjectReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Subscription_product" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_auditedBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_kycBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_user_key" ON "Subscription"("user");

-- CreateIndex
CREATE INDEX "ProjectRating_user_idx" ON "ProjectRating"("user");

-- CreateIndex
CREATE INDEX "ProjectRating_project_idx" ON "ProjectRating"("project");

-- CreateIndex
CREATE INDEX "ProjectReview_user_idx" ON "ProjectReview"("user");

-- CreateIndex
CREATE INDEX "ProjectReview_project_idx" ON "ProjectReview"("project");

-- CreateIndex
CREATE UNIQUE INDEX "_Subscription_product_AB_unique" ON "_Subscription_product"("A", "B");

-- CreateIndex
CREATE INDEX "_Subscription_product_B_index" ON "_Subscription_product"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_auditedBy_AB_unique" ON "_Project_auditedBy"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_auditedBy_B_index" ON "_Project_auditedBy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_kycBy_AB_unique" ON "_Project_kycBy"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_kycBy_B_index" ON "_Project_kycBy"("B");

-- CreateIndex
CREATE INDEX "CreatorRating_user_idx" ON "CreatorRating"("user");

-- CreateIndex
CREATE INDEX "CreatorReview_user_idx" ON "CreatorReview"("user");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatorRating" ADD CONSTRAINT "CreatorRating_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatorReview" ADD CONSTRAINT "CreatorReview_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRating" ADD CONSTRAINT "ProjectRating_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRating" ADD CONSTRAINT "ProjectRating_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectReview" ADD CONSTRAINT "ProjectReview_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectReview" ADD CONSTRAINT "ProjectReview_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Subscription_product" ADD CONSTRAINT "_Subscription_product_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Subscription_product" ADD CONSTRAINT "_Subscription_product_B_fkey" FOREIGN KEY ("B") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_auditedBy" ADD CONSTRAINT "_Project_auditedBy_A_fkey" FOREIGN KEY ("A") REFERENCES "Auditor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_auditedBy" ADD CONSTRAINT "_Project_auditedBy_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_kycBy" ADD CONSTRAINT "_Project_kycBy_A_fkey" FOREIGN KEY ("A") REFERENCES "KycGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_kycBy" ADD CONSTRAINT "_Project_kycBy_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
