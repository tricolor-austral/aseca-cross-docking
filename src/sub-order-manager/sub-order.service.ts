import { Injectable } from '@nestjs/common';
import { SubOrderRepository } from './sub-order.repository';
import { SubOrderCreate } from './dtos/sub-order-create';

Injectable();
export class SubOrderService {
  constructor(private repository: SubOrderRepository) {}

  async updateDelivery(id: string) {
    return this.repository.updateDelivery(id);
  }
  async createSubOrder(subOrder: SubOrderCreate, id: string) {
    return this.repository.createSubOrder(subOrder, id);
  }
}
