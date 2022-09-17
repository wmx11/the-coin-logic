-- AlterTable
ALTER TABLE "MarketStat" ADD COLUMN     "annotation" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "fdv" DOUBLE PRECISION,
ADD COLUMN     "txns" JSONB,
ADD COLUMN     "volume" JSONB;
