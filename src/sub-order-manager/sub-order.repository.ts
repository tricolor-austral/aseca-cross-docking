import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { ProductAmountCreate } from './dto/product-amount-create';
import { CreateSuborderDto } from './dto/create-suborder.dto';

@Injectable()
export class SubOrderRepository {
  constructor(private prisma: PrismaService) {}

  async updateDelivery(id: string) {
    return this.prisma.subOrder.update({
      where: { id: id },
      data: { delivered: true },
      include: {
        productAmmount: {},
      },
    });
  }

  async createSubOrder(subOrderCreate: CreateSuborderDto, id: string) {
    const order = await this.prisma.subOrder.create({
      data: {
        delivered: false,
        orderId: id,
        supplierId: subOrderCreate.supplierId,
      },
    });
    await this.createProductAmount(subOrderCreate.productAmount, order.id);
  }

  async getSubOrderById(id: string) {
    return this.prisma.subOrder.findUnique({
      where: { id: id },
      include: {
        productAmmount: {},
      },
    });
  }

  async getAll() {
    return this.prisma.subOrder.findMany({
      include: {
        productAmmount: {},
      },
    });
  }

  private async createProductAmount(
    productAmounts: ProductAmountCreate[],
    subOrderId: string,
  ) {
    return productAmounts.map(async (productAmount) => {
      await this.prisma.productAmmount.create({
        data: {
          productId: productAmount.productId,
          ammount: productAmount.amount,
          subOrderId: subOrderId,
        },
      });
    });
  }
}
