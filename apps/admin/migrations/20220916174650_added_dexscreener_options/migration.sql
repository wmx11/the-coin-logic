/*
  Warnings:

  - You are about to drop the column `user` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `_Project_holders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_user_fkey";

-- DropForeignKey
ALTER TABLE "_Project_holders" DROP CONSTRAINT "_Project_holders_A_fkey";

-- DropForeignKey
ALTER TABLE "_Project_holders" DROP CONSTRAINT "_Project_holders_B_fkey";

-- DropIndex
DROP INDEX "Project_user_idx";

-- AlterTable
ALTER TABLE "LiquidityPair" ADD COLUMN     "isPrimary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "useDexScreener" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "user",
ADD COLUMN     "useDexScreener" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "_Project_holders";

-- CreateTable
CREATE TABLE "_Project_user" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Project_relatedData" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Project_user_AB_unique" ON "_Project_user"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_user_B_index" ON "_Project_user"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Project_relatedData_AB_unique" ON "_Project_relatedData"("A", "B");

-- CreateIndex
CREATE INDEX "_Project_relatedData_B_index" ON "_Project_relatedData"("B");

-- AddForeignKey
ALTER TABLE "_Project_user" ADD CONSTRAINT "_Project_user_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_user" ADD CONSTRAINT "_Project_user_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_relatedData" ADD CONSTRAINT "_Project_relatedData_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Project_relatedData" ADD CONSTRAINT "_Project_relatedData_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
