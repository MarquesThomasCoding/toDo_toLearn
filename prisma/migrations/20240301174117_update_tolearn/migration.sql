/*
  Warnings:

  - You are about to drop the column `done` on the `tolearn` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tolearn` DROP COLUMN `done`,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'to start';
