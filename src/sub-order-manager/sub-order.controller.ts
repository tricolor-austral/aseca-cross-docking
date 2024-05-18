import { Controller, Param, Post } from '@nestjs/common';
import { SubOrderService } from './sub-order.service';

@Controller('sub-order/')
export class SubOrderController {
  constructor(private service: SubOrderService) {}
  @Post(`deliver:id`)
  async deliverAll(@Param('id') id: string): Promise<string> {
    await this.service.updateDelivery(id);
    return 'Successfully delivered';
  }
}
