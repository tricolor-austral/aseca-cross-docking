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
    const client = await this.clientService.findOrCreate(order.clientId);
    const createdOrder = await this.prisma.order.create({
      data: {
        id: order.id,
        delivered: false,
        clientId: client.id,
      },
    });
    for (const subOrder of order.subOrders) {
      await this.subOrderService.createSubOrder(subOrder, createdOrder.id);
    }
    return this.prisma.order.findFirst({
      where: {
        id: createdOrder.id,
      },
      include: {
        subOrder: {
          include: {
            productAmmount: {},
          },
        },
        client: true,
      },
    });
  }

  async updateOrderDelivery(id: string) {
    return this.prisma.order.update({
      where: { id: id },
      data: { delivered: true },
      include: { client: true },
    });
  }

  async getOrderState(id: string) {
    return this.prisma.order.findUnique({
      where: { id: id },
      include: {
        subOrder: {
          include: {
            productAmmount: {},
            supplier: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }
}
