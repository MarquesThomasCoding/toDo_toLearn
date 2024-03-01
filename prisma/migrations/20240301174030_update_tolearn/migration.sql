/*
  Warnings:

  - You are about to alter the column `done` on the `tolearn` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `tolearn` MODIFY `done` VARCHAR(191) NOT NULL DEFAULT 'to start';
