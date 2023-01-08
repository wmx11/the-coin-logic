-- AlterTable
ALTER TABLE "SocialStat" ADD COLUMN     "annotation" JSONB DEFAULT '{"title":null,"description":null,"href":null}';
