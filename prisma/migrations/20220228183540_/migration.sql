/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `owner` on the `community` table. All the data in the column will be lost.
  - You are about to drop the column `serieId` on the `community` table. All the data in the column will be lost.
  - You are about to drop the `enthusiast_community` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `serie_category` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `community` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idSerie` to the `community` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "community" DROP CONSTRAINT "community_serieId_fkey";

-- DropForeignKey
ALTER TABLE "enthusiast_community" DROP CONSTRAINT "enthusiast_community_id_community_fkey";

-- DropForeignKey
ALTER TABLE "enthusiast_community" DROP CONSTRAINT "enthusiast_community_id_enthusiast_fkey";

-- DropForeignKey
ALTER TABLE "serie_category" DROP CONSTRAINT "serie_category_id_category_fkey";

-- DropForeignKey
ALTER TABLE "serie_category" DROP CONSTRAINT "serie_category_id_serie_fkey";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "community" DROP COLUMN "owner",
DROP COLUMN "serieId",
ADD COLUMN     "idSerie" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "serie" ALTER COLUMN "imageUrl" DROP NOT NULL;

-- DropTable
DROP TABLE "enthusiast_community";

-- DropTable
DROP TABLE "serie_category";

-- CreateTable
CREATE TABLE "Session" (
    "refreshToken" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToSerie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommunityToEnthusiast" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_refreshToken_key" ON "Session"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToSerie_AB_unique" ON "_CategoryToSerie"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToSerie_B_index" ON "_CategoryToSerie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommunityToEnthusiast_AB_unique" ON "_CommunityToEnthusiast"("A", "B");

-- CreateIndex
CREATE INDEX "_CommunityToEnthusiast_B_index" ON "_CommunityToEnthusiast"("B");

-- CreateIndex
CREATE UNIQUE INDEX "community_name_key" ON "community"("name");

-- AddForeignKey
ALTER TABLE "community" ADD CONSTRAINT "community_idSerie_fkey" FOREIGN KEY ("idSerie") REFERENCES "serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSerie" ADD FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSerie" ADD FOREIGN KEY ("B") REFERENCES "serie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityToEnthusiast" ADD FOREIGN KEY ("A") REFERENCES "community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommunityToEnthusiast" ADD FOREIGN KEY ("B") REFERENCES "enthusiast"("id") ON DELETE CASCADE ON UPDATE CASCADE;
