import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ControlTowerRepository } from './control-tower.repository';

@Injectable()
export class ControlTowerService {
  constructor(private repository: ControlTowerRepository) {}
  private url = '';

  async notifyControlTower(order) {
    try {
      await axios.post(this.url, order);
    } catch (e) {
      console.log(e);
    }
  }

  async checkAllItemsDelivered(id: string) {
    const order = await this.repository.findOrderById(id);
    order.subOrder.forEach((order) => {
      if (!order.delivered) return false;
    });
    await this.notifyControlTower(order);
    return true;
  }
}
