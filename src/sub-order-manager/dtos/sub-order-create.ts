import { ProductAmmount } from '@prisma/client';

export class SubOrderCreate {
  supplierId: string;
  productAmmount: ProductAmmount[];
  orderId: string;
}
