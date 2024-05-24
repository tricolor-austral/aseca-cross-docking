import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
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
    try {
      console.log(id);
      const result = await this.service.updateWholeDelivery(id);
      return result;
    } catch (error) {
      console.error('Error delivering order:', error);
      throw new HttpException(
        'Failed to deliver order',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('state/:id')
  public async getOrderState(@Param('id') id: string) {
    return this.service.getOrderState(id);
  }

  @Get()
  public async getOrders() {
    console.log('Getting orders');
    return this.service.getOrders();
  }
}
