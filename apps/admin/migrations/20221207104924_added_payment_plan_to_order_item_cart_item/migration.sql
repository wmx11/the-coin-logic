-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "paymentPlan" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "paymentPlan" TEXT;

-- CreateIndex
CREATE INDEX "CartItem_paymentPlan_idx" ON "CartItem"("paymentPlan");

-- CreateIndex
CREATE INDEX "OrderItem_paymentPlan_idx" ON "OrderItem"("paymentPlan");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_paymentPlan_fkey" FOREIGN KEY ("paymentPlan") REFERENCES "PaymentPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_paymentPlan_fkey" FOREIGN KEY ("paymentPlan") REFERENCES "PaymentPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
