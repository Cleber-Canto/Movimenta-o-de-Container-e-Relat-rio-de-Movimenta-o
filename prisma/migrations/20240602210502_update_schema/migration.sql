/*
  Warnings:

  - The primary key for the `Container` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `encryptedId` on the `Container` table. All the data in the column will be lost.
  - The primary key for the `Movimentacao` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Movimentacao" DROP CONSTRAINT "Movimentacao_containerId_fkey";

-- DropIndex
DROP INDEX "Container_cliente_key";

-- DropIndex
DROP INDEX "Container_encryptedId_key";

-- AlterTable
ALTER TABLE "Container" DROP CONSTRAINT "Container_pkey",
DROP COLUMN "encryptedId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Container_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Container_id_seq";

-- AlterTable
ALTER TABLE "Movimentacao" DROP CONSTRAINT "Movimentacao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "containerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Movimentacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Movimentacao_id_seq";

-- AddForeignKey
ALTER TABLE "Movimentacao" ADD CONSTRAINT "Movimentacao_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
