/*
  Warnings:

  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Room` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_room" SERIAL NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("id_room");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_user" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id_user");

-- CreateTable
CREATE TABLE "RentReserve" (
    "id_rent_reserve" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_room" INTEGER NOT NULL,
    "data_initial_reserve" TIMESTAMP(3) NOT NULL,
    "data_final_reserve" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RentReserve_pkey" PRIMARY KEY ("id_rent_reserve")
);

-- AddForeignKey
ALTER TABLE "RentReserve" ADD CONSTRAINT "RentReserve_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RentReserve" ADD CONSTRAINT "RentReserve_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;
