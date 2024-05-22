import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { SubOrderService } from '../sub-order-manager/sub-order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientService } from '../client/client.service';

@Injectable()
export class OrderRepository {
  constructor(
    private prisma: PrismaService,
    private subOrderService: SubOrderService,
    private clientService: ClientService,
  ) {}

  async createOrder(order: CreateOrderDto) {
    console.log('Start function');
    const client = await this.clientService.findOrCreate(order.client);
    const createdOrder = await this.prisma.order.create({
      data: {
        delivered: false,
        clientId: client.id,
      },
    });
    for (const subOrder of order.subOrders) {
      await this.subOrderService.createSubOrder(subOrder, createdOrder.id);
    }
    console.log('arrived here');
    return this.prisma.order.findFirst({
      where: {
        id: createdOrder.id,
      },
    });
  }
}
