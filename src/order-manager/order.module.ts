import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { SubOrderService } from '../sub-order-manager/sub-order.service';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [PrismaService, OrderRepository, OrderService, SubOrderService],
  imports: [SubOrderService],
})
export class OrderModule {}
