/*
  Warnings:

  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_status_fkey";

-- DropIndex
DROP INDEX "Order_status_idx";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "project" TEXT;

-- CreateIndex
CREATE INDEX "Order_project_idx" ON "Order"("project");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
