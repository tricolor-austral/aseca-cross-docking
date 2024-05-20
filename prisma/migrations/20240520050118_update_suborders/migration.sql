/*
  Warnings:

  - You are about to drop the column `productAmmountId` on the `SubOrder` table. All the data in the column will be lost.
  - You are about to drop the `ProductAmmount` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `SubOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `SubOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubOrder" DROP CONSTRAINT "SubOrder_productAmmountId_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "delivered" SET DEFAULT false;

-- AlterTable
ALTER TABLE "SubOrder" DROP COLUMN "productAmmountId",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ALTER COLUMN "delivered" SET DEFAULT false;

-- DropTable
DROP TABLE "ProductAmmount";
