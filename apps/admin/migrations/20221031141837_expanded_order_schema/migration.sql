/*
  Warnings:

  - You are about to drop the column `data` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `requestId` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "data",
DROP COLUMN "requestId",
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "currencyPriceEur" DOUBLE PRECISION,
ADD COLUMN     "paymentNetwork" TEXT,
ADD COLUMN     "transactionHash" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "walletAddress" TEXT NOT NULL DEFAULT E'';

-- CreateIndex
CREATE INDEX "Order_paymentNetwork_idx" ON "Order"("paymentNetwork");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentNetwork_fkey" FOREIGN KEY ("paymentNetwork") REFERENCES "Network"("id") ON DELETE SET NULL ON UPDATE CASCADE;
