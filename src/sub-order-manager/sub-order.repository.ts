import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';

@Injectable()
export class SubOrderRepository {
  constructor(private prisma: PrismaService) {}

  public async updateDelivery(id: string) {
    return this.prisma.subOrder.update({
      where: { id: id },
      data: { delivered: true },
    });
  }
}
