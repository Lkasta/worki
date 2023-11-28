/*
  Warnings:

  - You are about to drop the column `status` on the `RentReserve` table. All the data in the column will be lost.
  - Added the required column `canceled` to the `RentReserve` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RentReserve" DROP COLUMN "status",
ADD COLUMN     "canceled" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';
