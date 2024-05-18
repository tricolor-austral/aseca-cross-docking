import { Injectable } from '@nestjs/common';
import { SubOrderRepository } from './sub-order.repository';

Injectable();
export class SubOrderService {
  constructor(private repository: SubOrderRepository) {}

  async updateDelivery(id: string) {
    return this.repository.updateDelivery(id);
  }
}
