/*
  Warnings:

  - A unique constraint covering the columns `[cliente]` on the table `Container` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Container_cliente_key" ON "Container"("cliente");
