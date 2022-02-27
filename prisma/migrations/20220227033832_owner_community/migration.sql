/*
  Warnings:

  - Added the required column `owner` to the `community` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "community" ADD COLUMN     "owner" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "community" ADD CONSTRAINT "community_owner_fkey" FOREIGN KEY ("owner") REFERENCES "enthusiast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
