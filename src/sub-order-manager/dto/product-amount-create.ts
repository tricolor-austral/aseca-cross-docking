export class ProductAmountCreate {
  public productId: string;
  public amount: number;
  constructor(productId: string, amount: number) {
    this.productId = productId;
    this.amount = amount;
  }
}
