import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';

export class OrderService {
  constructor(public repository: OrderRepository) {}
  public async createOrder(orderCreate: CreateOrderDto) {
    return this.repository.createOrder(orderCreate);
  }
}
