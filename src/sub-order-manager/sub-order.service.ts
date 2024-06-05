import { SubOrderRepository } from './sub-order.repository';
import { CreateSuborderDto } from './dto/create-suborder.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { ControlTowerService } from '../control-tower/control-tower.service';

@Injectable()
export class SubOrderService {
  constructor(
    private repository: SubOrderRepository,
    private ctService: ControlTowerService,
  ) {}

  async updateDelivery(id: string) {
    const actual = await this.repository.getSubOrderById(id);
    if (!actual) {
      throw new HttpException('Suborder not found', 404);
    }
    if (actual.delivered) {
      throw new HttpException('Suborder already delivered', 400);
    }
    const update = await this.repository.updateDelivery(id);
    await this.ctService.checkAllItemsDelivered(update.orderId);
    return update;
  }

  async createSubOrder(subOrder: CreateSuborderDto, id: string) {
    return this.repository.createSubOrder(subOrder, id);
  }

  async getAll() {
    return this.repository.getAll();
  }
}
