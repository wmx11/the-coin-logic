-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "auditLink" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "kycLink" TEXT NOT NULL DEFAULT E'';
