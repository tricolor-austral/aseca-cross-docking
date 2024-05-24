import { Module } from '@nestjs/common';

import { SubOrderService } from './sub-order.service';
import { SubOrderRepository } from './sub-order.repository';
import { PrismaService } from '../prisma-service';
import { SubOrderController } from './sub-order.controller';
import { ControlTowerModule } from '../control-tower/control-tower.module';

@Module({
  imports: [ControlTowerModule],
  controllers: [SubOrderController],
  providers: [SubOrderService, SubOrderRepository, PrismaService],
  exports: [SubOrderService, SubOrderRepository],
})
export class SubOrderModule {}
