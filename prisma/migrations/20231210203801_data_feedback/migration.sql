/*
  Warnings:

  - Added the required column `dataFeedback` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "dataFeedback" TIMESTAMP(3) NOT NULL;
