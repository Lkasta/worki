-- CreateTable
CREATE TABLE "Feedback" (
    "id_feedback" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_room" INTEGER NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id_feedback")
);

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_id_room_fkey" FOREIGN KEY ("id_room") REFERENCES "Room"("id_room") ON DELETE RESTRICT ON UPDATE CASCADE;
