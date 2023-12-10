/*
  Warnings:

  - A unique constraint covering the columns `[id_feedback]` on the table `RoomRating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_feedback` to the `RoomRating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RoomRating" ADD COLUMN     "id_feedback" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RoomRating_id_feedback_key" ON "RoomRating"("id_feedback");

-- AddForeignKey
ALTER TABLE "RoomRating" ADD CONSTRAINT "RoomRating_id_feedback_fkey" FOREIGN KEY ("id_feedback") REFERENCES "Feedback"("id_feedback") ON DELETE RESTRICT ON UPDATE CASCADE;
