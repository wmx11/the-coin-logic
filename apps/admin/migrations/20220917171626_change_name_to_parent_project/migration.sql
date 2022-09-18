/*
  Warnings:

  - You are about to drop the `_Project_relatedData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Project_relatedData" DROP CONSTRAINT "_Project_relatedData_A_fkey";

-- DropForeignKey
ALTER TABLE "_Project_relatedData" DROP CONSTRAINT "_Project_relatedData_B_fkey";

-- DropTable
DROP TABLE "_Project_relatedData";

-- CreateTable
CREATE TABLE "_Project_parentProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Project_parentProject_AB_unique" ON "_Project_parentProject"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_parentProject_B_index" ON "_Project_parentProject"("B");

-- AddForeignKey
ALTER TABLE "_Project_parentProject" ADD CONSTRAINT "_Project_parentProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_parentProject" ADD CONSTRAINT "_Project_parentProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
