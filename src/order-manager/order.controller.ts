import { Body, Controller, Post } from '@nestjs/common';
import { OrderCreate } from './dtos/order-create';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private service: OrderService) {}
  @Post('create')
  public async createOrder(@Body() order: OrderCreate) {
    return this.service.createOrder(order);
  }
}
