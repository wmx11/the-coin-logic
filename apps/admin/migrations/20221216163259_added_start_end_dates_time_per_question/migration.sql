-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "timePerQuestion" INTEGER DEFAULT 0;
