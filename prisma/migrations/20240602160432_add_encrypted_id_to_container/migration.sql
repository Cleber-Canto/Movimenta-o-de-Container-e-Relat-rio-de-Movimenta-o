/*
  Warnings:

  - A unique constraint covering the columns `[encryptedId]` on the table `Container` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `encryptedId` to the `Container` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Container" ADD COLUMN     "encryptedId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Container_encryptedId_key" ON "Container"("encryptedId");
