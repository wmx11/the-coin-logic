-- AlterTable
ALTER TABLE "CustomTracker" ADD COLUMN     "applyProjectNativeTokenPrice" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isCurrency" BOOLEAN NOT NULL DEFAULT false;
