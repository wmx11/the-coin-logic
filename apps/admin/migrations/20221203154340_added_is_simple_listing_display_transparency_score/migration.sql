-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "displayTransparencyScore" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSimpleListing" BOOLEAN NOT NULL DEFAULT false;
