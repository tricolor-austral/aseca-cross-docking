import { SubOrderRepository } from './sub-order.repository';
import { CreateSuborderDto } from './dto/create-suborder.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SubOrderService {
  constructor(private repository: SubOrderRepository) {}

  async updateDelivery(id: string) {
    return this.repository.updateDelivery(id);
  }
  async createSubOrder(subOrder: CreateSuborderDto, id: string) {
    return this.repository.createSubOrder(subOrder, id);
  }
}
