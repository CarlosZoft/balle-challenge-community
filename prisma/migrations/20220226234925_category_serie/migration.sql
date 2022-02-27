/*
  Warnings:

  - You are about to drop the `CommunitySerie` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `enthusiast` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serieId` to the `community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `enthusiast` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `enthusiast_community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `serie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearLaunch` to the `serie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CommunitySerie" DROP CONSTRAINT "CommunitySerie_id_community_fkey";

-- DropForeignKey
ALTER TABLE "CommunitySerie" DROP CONSTRAINT "CommunitySerie_id_serie_fkey";

-- AlterTable
ALTER TABLE "community" ADD COLUMN     "serieId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "enthusiast" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "enthusiast_community" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "serie" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "yearLaunch" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "CommunitySerie";

-- CreateTable
CREATE TABLE "category" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "serie_category" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id_category" TEXT NOT NULL,
    "id_serie" TEXT NOT NULL,

    CONSTRAINT "serie_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "enthusiast_email_key" ON "enthusiast"("email");

-- AddForeignKey
ALTER TABLE "serie_category" ADD CONSTRAINT "serie_category_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serie_category" ADD CONSTRAINT "serie_category_id_serie_fkey" FOREIGN KEY ("id_serie") REFERENCES "serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "community" ADD CONSTRAINT "community_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "serie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
