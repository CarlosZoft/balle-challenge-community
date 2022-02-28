/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "session" (
    "refreshToken" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "session_refreshToken_key" ON "session"("refreshToken");
