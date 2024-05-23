import { Body, Controller, Param, Post, Put } from '@nestjs/common';
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
  public async deliverWholeOrder(@Param('id') id: string) {
    return this.service.updateWholeDelivery(id);
  }
}
