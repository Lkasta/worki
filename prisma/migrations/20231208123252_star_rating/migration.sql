-- CreateTable
CREATE TABLE "RoomRating" (
    "id_room_rating" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_room" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "RoomRating_pkey" PRIMARY KEY ("id_room_rating")
);

-- AddForeignKey
ALTER TABLE "RoomRating" ADD CONSTRAINT "RoomRating_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomRating" ADD CONSTRAINT "RoomRating_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;
