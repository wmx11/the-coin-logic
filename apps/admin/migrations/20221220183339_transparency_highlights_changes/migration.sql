/*
  Warnings:

  - You are about to drop the `TransparencyHighlight` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TransparencyHighlight" DROP CONSTRAINT "TransparencyHighlight_project_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "transparencyHighlights" JSONB DEFAULT '[{"isPositive":false,"content":""}]';

-- DropTable
DROP TABLE "TransparencyHighlight";
