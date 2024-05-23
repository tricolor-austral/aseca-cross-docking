/*
  Warnings:

  - You are about to drop the column `amount` on the `SubOrder` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `SubOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "delivered" DROP DEFAULT;

-- AlterTable
ALTER TABLE "SubOrder" DROP COLUMN "amount",
DROP COLUMN "productId",
ALTER COLUMN "delivered" DROP DEFAULT;

-- CreateTable
CREATE TABLE "ProductAmmount" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "ammount" INTEGER NOT NULL,
    "subOrderId" TEXT NOT NULL,

    CONSTRAINT "ProductAmmount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductAmmount" ADD CONSTRAINT "ProductAmmount_subOrderId_fkey" FOREIGN KEY ("subOrderId") REFERENCES "SubOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
