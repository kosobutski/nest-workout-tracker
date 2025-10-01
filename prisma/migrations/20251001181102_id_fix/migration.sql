/*
  Warnings:

  - The primary key for the `WorkoutLog` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "WorkoutLog" DROP CONSTRAINT "WorkoutLog_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "WorkoutLog_pkey" PRIMARY KEY ("id");
