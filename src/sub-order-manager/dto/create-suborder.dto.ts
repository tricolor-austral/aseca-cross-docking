import { ProductAmountCreate } from './product-amount-create';

export class CreateSuborderDto {
  supplierId: string;
  productAmount: ProductAmountCreate[];

  constructor(supplierId: string, pas: ProductAmountCreate[]) {
    this.supplierId = supplierId;
    this.productAmount = pas;
  }
}
