import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';

@Injectable()
export class ClientRepository {
  constructor(private prisma: PrismaService) {}
  async findOrCreateByName(id: string) {
    let prismaClientClient = await this.prisma.client.findFirst({
      where: { id: id },
    });

    if (!prismaClientClient) {
      prismaClientClient = await this.prisma.client.create({
        data: { id: id, name: 'John Doe', address: '107 Park Ave Ny, Ny' },
      });
    }

    return prismaClientClient;
  }
}
