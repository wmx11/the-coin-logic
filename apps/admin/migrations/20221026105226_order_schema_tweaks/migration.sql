-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "discount" SET DEFAULT 0,
ALTER COLUMN "quantity" SET DEFAULT 1,
ALTER COLUMN "tax" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "discount" SET DEFAULT 0,
ALTER COLUMN "tax" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "tax" DOUBLE PRECISION DEFAULT 0,
ALTER COLUMN "quantity" SET DEFAULT 1,
ALTER COLUMN "discount" SET DEFAULT 0;
