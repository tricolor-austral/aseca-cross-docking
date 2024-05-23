import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { ClientCreateDto } from './dto/client-create-dto';

@Injectable()
export class ClientRepository {
  constructor(private prisma: PrismaService) {}
  async findOrCreateByName(client: ClientCreateDto) {
    let prismaClientClient = await this.prisma.client.findFirst({
      where: { name: client.name },
    });

    if (!prismaClientClient) {
      prismaClientClient = await this.prisma.client.create({
        data: { name: client.name, address: client.address },
      });
    }

    return prismaClientClient;
  }
}
