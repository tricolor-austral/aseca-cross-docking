import { PrismaService } from '../prisma-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ControlTowerRepository {
  constructor(private prisma: PrismaService) {}
  async findOrderById(id: string) {
    return this.prisma.order.findUnique({
      where: { id: id },
      include: {
        subOrder: {
          select: {
            delivered: true,
          },
        },
      },
    });
  }
}
