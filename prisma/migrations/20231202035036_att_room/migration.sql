/*
  Warnings:

  - Added the required column `address` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressNumber` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image1` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image3` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "addressNumber" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "image1" TEXT NOT NULL,
ADD COLUMN     "image2" TEXT NOT NULL,
ADD COLUMN     "image3" TEXT NOT NULL,
ADD COLUMN     "neighborhood" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "icon" TEXT NOT NULL;
