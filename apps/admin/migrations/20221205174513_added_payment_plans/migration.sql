/*
  Warnings:

  - You are about to drop the column `isSimpleListing` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "isSimpleListing",
ADD COLUMN     "paymentPlan" TEXT;

-- CreateTable
CREATE TABLE "PaymentPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "slug" TEXT NOT NULL DEFAULT E'',
    "tooltip" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "price" DOUBLE PRECISION,
    "discount" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PaymentPlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_paymentPlan_idx" ON "Project"("paymentPlan");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_paymentPlan_fkey" FOREIGN KEY ("paymentPlan") REFERENCES "PaymentPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
