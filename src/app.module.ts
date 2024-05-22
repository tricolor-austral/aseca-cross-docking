import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order-manager/order.module';
import { SubOrderModule } from './sub-order-manager/sub-order.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [OrderModule, SubOrderModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
