import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async createOrder(order: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        clientId: order.clientId,
        subOrders: {
          createMany: {
            data: order.subOrders.map((suborder) => {
              return {
                supplierId: suborder.supplierId,
                productId: suborder.productId,
                amount: suborder.amount,
              };
            }),
          },
        },
      },
      include: {
        subOrders: true,
      },
    });
  }
}
