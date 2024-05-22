export class CreateSuborderDto {
  supplierId: string;
  productId: string;
  amount: number;

  constructor(supplierId: string, productId: string, amount: number) {
    this.supplierId = supplierId;
    this.productId = productId;
    this.amount = amount;
  }
}
