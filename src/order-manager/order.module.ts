import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma-service';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ClientModule } from '../client/client.module';
import { SubOrderModule } from '../sub-order-manager/sub-order.module';
import { ControlTowerModule } from '../control-tower/control-tower.module';
import { OrderRepositoryMock } from './order.repositoryMock';

@Module({
  controllers: [OrderController],
  providers: [PrismaService, OrderRepository, OrderService, OrderRepositoryMock],
  imports: [ClientModule, SubOrderModule, ControlTowerModule],
})
export class OrderModule {}
