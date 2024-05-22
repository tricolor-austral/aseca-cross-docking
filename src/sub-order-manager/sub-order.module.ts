import { Module } from '@nestjs/common';

import { SubOrderService } from './sub-order.service';
import { SubOrderRepository } from './sub-order.repository';
import { PrismaService } from '../prisma-service';
import { SubOrderController } from './sub-order.controller';

@Module({
  imports: [],
  controllers: [SubOrderController],
  providers: [SubOrderService, SubOrderRepository, PrismaService],
  exports: [SubOrderService],
})
export class AppModule {}
