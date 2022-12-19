-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "user" TEXT;

-- CreateTable
CREATE TABLE "_User_managedProjects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_User_managedProjects_AB_unique" ON "_User_managedProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_User_managedProjects_B_index" ON "_User_managedProjects"("B");

-- CreateIndex
CREATE INDEX "Content_user_idx" ON "Content"("user");

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_managedProjects" ADD CONSTRAINT "_User_managedProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User_managedProjects" ADD CONSTRAINT "_User_managedProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
