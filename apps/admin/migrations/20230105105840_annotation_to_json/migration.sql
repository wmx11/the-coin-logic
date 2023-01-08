/*
  Warnings:

  - The `annotation` column on the `MarketStat` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "MarketStat_annotation_idx";

-- AlterTable
ALTER TABLE "MarketStat" DROP COLUMN "annotation",
ADD COLUMN     "annotation" JSONB DEFAULT '{"title":null,"description":null,"href":null}';
