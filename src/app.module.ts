import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order-manager/order.module';
import { SubOrderModule } from './sub-order-manager/sub-order.module';
import { ClientModule } from './client/client.module';
import { ControlTowerModule } from './control-tower/control-tower.module';

@Module({
  imports: [OrderModule, SubOrderModule, ClientModule, ControlTowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
