import { ProductAmountCreate } from './product-amount-create';

export class SubOrderCreate {
  supplierId: string;
  productAmount: ProductAmountCreate[];
}
