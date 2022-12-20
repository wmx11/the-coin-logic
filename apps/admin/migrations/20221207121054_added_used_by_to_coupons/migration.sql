/*
  Warnings:

  - You are about to drop the `_Coupon_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Coupon_users" DROP CONSTRAINT "_Coupon_users_A_fkey";

-- DropForeignKey
ALTER TABLE "_Coupon_users" DROP CONSTRAINT "_Coupon_users_B_fkey";

-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "usedBy" JSONB DEFAULT '{"user":"id","times":0}';

-- DropTable
DROP TABLE "_Coupon_users";
