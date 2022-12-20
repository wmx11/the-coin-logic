/*
  Warnings:

  - A unique constraint covering the columns `[cart]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CartItem_cart_idx";

-- DropIndex
DROP INDEX "OrderItem_order_idx";

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cart_key" ON "CartItem"("cart");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_order_key" ON "OrderItem"("order");
