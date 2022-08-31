/*
  Warnings:

  - You are about to drop the `_Transfer_holders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Transfer_holders" DROP CONSTRAINT "_Transfer_holders_A_fkey";

-- DropForeignKey
ALTER TABLE "_Transfer_holders" DROP CONSTRAINT "_Transfer_holders_B_fkey";

-- DropTable
DROP TABLE "_Transfer_holders";
