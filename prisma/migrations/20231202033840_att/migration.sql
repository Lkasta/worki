/*
  Warnings:

  - You are about to drop the column `address` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `addressNumber` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `complement` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `image1` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `image2` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `image3` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the `Ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_id_room_fkey";

-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_id_user_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "address",
DROP COLUMN "addressNumber",
DROP COLUMN "complement",
DROP COLUMN "image1",
DROP COLUMN "image2",
DROP COLUMN "image3",
DROP COLUMN "neighborhood",
DROP COLUMN "postalCode";

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "icon";

-- DropTable
DROP TABLE "Ratings";
