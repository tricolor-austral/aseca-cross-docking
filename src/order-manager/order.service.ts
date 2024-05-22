import { OrderCreate } from './dtos/order-create';
import { OrderRepository } from './order.repository';

export class OrderService {
  constructor(public repository: OrderRepository) {}
  public async createOrder(orderCreate: OrderCreate) {
    return this.repository.createOrder(orderCreate);
  }
}
