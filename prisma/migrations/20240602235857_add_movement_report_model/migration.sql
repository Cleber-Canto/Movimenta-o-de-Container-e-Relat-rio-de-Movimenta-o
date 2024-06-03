-- CreateTable
CREATE TABLE "MovementReport" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "movementType" TEXT NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "MovementReport_pkey" PRIMARY KEY ("id")
);
