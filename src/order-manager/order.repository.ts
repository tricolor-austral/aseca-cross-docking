import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { OrderCreate } from './dtos/order-create';
import { SubOrderCreate } from '../sub-order-manager/dtos/sub-order-create';
import { ProductAmmount } from '@prisma/client';

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async createOrder(order: OrderCreate) {
    const subOrders = await this.createSubOrder(order.subOrders, order.id);
    return this.prisma.order.create({
      data: {
        id: order.id,
        delivered: false,
        client: {
          create: order.client,
        },
        subOrder: {
          create: subOrders,
        },
      },
    });
  }

  private async createSubOrder(suborders: SubOrderCreate[], orderId: string) {
    return Promise.all(
      suborders.map(async (miniOrder) => ({
        delivered: false,
        supplier: {
          connect: { id: miniOrder.supplierId },
        },
        productAmmount: {
          create: await this.createProductAmmount(miniOrder.productAmmount),
        },
        orderId: orderId,
      })),
    );
  }

  private async createProductAmmount(ammounts: ProductAmmount[]) {
    return ammounts.map((ammount) => ({
      productId: ammount.productId,
      ammount: ammount.ammount,
    }));
  }
}
