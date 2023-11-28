/*
  Warnings:

  - Added the required column `status` to the `RentReserve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RentReserve" ADD COLUMN     "status" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Services" (
    "id_service" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id_service")
);

-- CreateTable
CREATE TABLE "RoomServices" (
    "id_room_service" SERIAL NOT NULL,
    "id_room" INTEGER NOT NULL,
    "id_service" INTEGER NOT NULL,

    CONSTRAINT "RoomServices_pkey" PRIMARY KEY ("id_room_service")
);

-- AddForeignKey
ALTER TABLE "RoomServices" ADD CONSTRAINT "RoomServices_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomServices" ADD CONSTRAINT "RoomServices_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "Services"("id_service") ON DELETE RESTRICT ON UPDATE CASCADE;
