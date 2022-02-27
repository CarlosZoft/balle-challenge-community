/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `community` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "community_name_key" ON "community"("name");
