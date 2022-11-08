-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "data" JSONB,
ADD COLUMN     "requestId" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "data" JSONB,
ADD COLUMN     "requestId" TEXT NOT NULL DEFAULT E'';
