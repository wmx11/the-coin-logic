-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "order" TEXT;

-- CreateIndex
CREATE INDEX "Subscription_order_idx" ON "Subscription"("order");

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_order_fkey" FOREIGN KEY ("order") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
