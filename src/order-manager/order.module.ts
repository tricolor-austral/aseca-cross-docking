import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { PrismaService } from '../prisma-service';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [PrismaService, OrderRepository, OrderService],
})
export class OrderModule {}
