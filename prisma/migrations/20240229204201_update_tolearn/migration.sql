/*
  Warnings:

  - Added the required column `timelimit` to the `ToLearn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tolearn` ADD COLUMN `timelimit` DATETIME(3) NOT NULL;
