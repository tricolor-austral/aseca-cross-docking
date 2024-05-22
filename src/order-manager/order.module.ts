import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { SubOrderService } from '../sub-order-manager/sub-order.service';
import { OrderController } from './order.controller';
import { ClientModule } from '../client/client.module';
import { SubOrderModule } from '../sub-order-manager/sub-order.module';

@Module({
  controllers: [OrderController],
  providers: [PrismaService, OrderRepository, OrderService, SubOrderService],
  imports: [ClientModule, SubOrderModule],
})
export class OrderModule {}
