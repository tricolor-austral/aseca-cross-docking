import { Controller, Param, Put } from '@nestjs/common';
import { SubOrderService } from './sub-order.service';

@Controller('sub-order')
export class SubOrderController {
  constructor(private service: SubOrderService) {}
  @Put('deliver/:id')
  async deliverAll(@Param('id') id: string) {
    return this.service.updateDelivery(id);
  }
}
