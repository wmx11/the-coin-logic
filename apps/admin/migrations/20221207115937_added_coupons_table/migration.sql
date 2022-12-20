-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "code" TEXT NOT NULL DEFAULT E'',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "discountPercentage" INTEGER,
    "discountFromPrice" INTEGER,
    "timesPerUser" INTEGER,
    "validFrom" TIMESTAMP(3),
    "validTill" TIMESTAMP(3),
    "dateAdded" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Coupon_users" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Coupon_acceptFromReferrers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Coupon_acceptFromNetworks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Coupon_users_AB_unique" ON "_Coupon_users"("A", "B");

-- CreateIndex
CREATE INDEX "_Coupon_users_B_index" ON "_Coupon_users"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Coupon_acceptFromReferrers_AB_unique" ON "_Coupon_acceptFromReferrers"("A", "B");

-- CreateIndex
CREATE INDEX "_Coupon_acceptFromReferrers_B_index" ON "_Coupon_acceptFromReferrers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Coupon_acceptFromNetworks_AB_unique" ON "_Coupon_acceptFromNetworks"("A", "B");

-- CreateIndex
CREATE INDEX "_Coupon_acceptFromNetworks_B_index" ON "_Coupon_acceptFromNetworks"("B");

-- AddForeignKey
ALTER TABLE "_Coupon_users" ADD CONSTRAINT "_Coupon_users_A_fkey" FOREIGN KEY ("A") REFERENCES "Coupon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Coupon_users" ADD CONSTRAINT "_Coupon_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Coupon_acceptFromReferrers" ADD CONSTRAINT "_Coupon_acceptFromReferrers_A_fkey" FOREIGN KEY ("A") REFERENCES "Coupon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Coupon_acceptFromReferrers" ADD CONSTRAINT "_Coupon_acceptFromReferrers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Coupon_acceptFromNetworks" ADD CONSTRAINT "_Coupon_acceptFromNetworks_A_fkey" FOREIGN KEY ("A") REFERENCES "Coupon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Coupon_acceptFromNetworks" ADD CONSTRAINT "_Coupon_acceptFromNetworks_B_fkey" FOREIGN KEY ("B") REFERENCES "Network"("id") ON DELETE CASCADE ON UPDATE CASCADE;
