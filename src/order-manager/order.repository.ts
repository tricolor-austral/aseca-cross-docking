import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { OrderCreate } from './dtos/order-create';
import { SubOrderService } from '../sub-order-manager/sub-order.service';

@Injectable()
export class OrderRepository {
  constructor(
    private prisma: PrismaService,
    private subOrderService: SubOrderService,
  ) {}

  async createOrder(order: OrderCreate) {
    const createdOrder = await this.prisma.order.create({
      data: {
        delivered: false,
        client: {
          create: {
            name: order.client.name,
            adress: order.client.adress,
          },
        },
      },
    });
    for (const subOrder of order.subOrders) {
      await this.subOrderService.createSubOrder(subOrder, createdOrder.id);
    }
    return this.prisma.order.findFirst({
      where: {
        id: createdOrder.id,
      },
    });
  }
}
