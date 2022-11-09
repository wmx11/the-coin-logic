/*
  Warnings:

  - You are about to drop the `_Holder_projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Holder_projects" DROP CONSTRAINT "_Holder_projects_A_fkey";

-- DropForeignKey
ALTER TABLE "_Holder_projects" DROP CONSTRAINT "_Holder_projects_B_fkey";

-- AlterTable
ALTER TABLE "Holder" ADD COLUMN     "projects" TEXT;

-- DropTable
DROP TABLE "_Holder_projects";

-- CreateIndex
CREATE INDEX "Holder_projects_idx" ON "Holder"("projects");

-- AddForeignKey
ALTER TABLE "Holder" ADD CONSTRAINT "Holder_projects_fkey" FOREIGN KEY ("projects") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
