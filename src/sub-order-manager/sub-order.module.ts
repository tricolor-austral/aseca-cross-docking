import { Module } from '@nestjs/common';
import { SubOrderController } from './sub-order.controller';
import { SubOrderService } from './sub-order.service';
import { SubOrderRepository } from './sub-order.repository';
import { PrismaService } from '../prisma-service';

@Module({
  controllers: [SubOrderController],
  providers: [SubOrderService, SubOrderRepository, PrismaService],
})
export class SubOrderModule {}
