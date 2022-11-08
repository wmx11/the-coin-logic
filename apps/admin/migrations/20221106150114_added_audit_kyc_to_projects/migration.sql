/*
  Warnings:

  - You are about to drop the column `auditLink` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `kycLink` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `_Project_auditedBy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Project_kycBy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_Project_auditedBy" DROP CONSTRAINT "_Project_auditedBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_Project_auditedBy" DROP CONSTRAINT "_Project_auditedBy_B_fkey";

-- DropForeignKey
ALTER TABLE "_Project_kycBy" DROP CONSTRAINT "_Project_kycBy_A_fkey";

-- DropForeignKey
ALTER TABLE "_Project_kycBy" DROP CONSTRAINT "_Project_kycBy_B_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "auditLink",
DROP COLUMN "kycLink";

-- DropTable
DROP TABLE "_Project_auditedBy";

-- DropTable
DROP TABLE "_Project_kycBy";

-- CreateTable
CREATE TABLE "Audit" (
    "id" TEXT NOT NULL,
    "project" TEXT,
    "auditor" TEXT,
    "url" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Audit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kyc" (
    "id" TEXT NOT NULL,
    "project" TEXT,
    "kycGroup" TEXT,
    "url" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Kyc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Audit_project_idx" ON "Audit"("project");

-- CreateIndex
CREATE INDEX "Audit_auditor_idx" ON "Audit"("auditor");

-- CreateIndex
CREATE INDEX "Kyc_project_idx" ON "Kyc"("project");

-- CreateIndex
CREATE INDEX "Kyc_kycGroup_idx" ON "Kyc"("kycGroup");

-- AddForeignKey
ALTER TABLE "Audit" ADD CONSTRAINT "Audit_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audit" ADD CONSTRAINT "Audit_auditor_fkey" FOREIGN KEY ("auditor") REFERENCES "Auditor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kyc" ADD CONSTRAINT "Kyc_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kyc" ADD CONSTRAINT "Kyc_kycGroup_fkey" FOREIGN KEY ("kycGroup") REFERENCES "KycGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
