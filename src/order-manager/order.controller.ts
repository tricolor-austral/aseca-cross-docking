import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private service: OrderService) {}
  @Post('create')
  public async createOrder(@Body() order: CreateOrderDto) {
    return this.service.createOrder(order);
  }

  @Put('deliver/:id')
  async deliverOrder(@Param('id') id: string) {
    console.log('Delivering order');
    return await this.service.updateWholeDelivery(id);
  }

  @Get('state/:id')
  public async getOrderState(@Param('id') id: string) {
    return this.service.getOrderState(id);
  }

  @Get()
  public async getOrders() {
    console.log('Getting orders');
    const orders = this.service.getOrders();
    console.log('Orders sent');
    return orders;
  }
}
