import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ControlTowerRepository } from './control-tower.repository';

@Injectable()
export class ControlTowerService {
  constructor(private repository: ControlTowerRepository) {}
  private url =
    'https://fc43-181-169-17-49.ngrok-free.app/cross-docking/delivered';

  async notifyControlTower(order) {
    try {
      const data = {
        orderID: order.orderId,
      };
      const response = await axios.post(this.url, data);
      if (response.status != 201)
        throw new Error('Error notifying control tower');
    } catch (e) {
      console.log(e);
    }
  }

  async checkAllItemsDelivered(id: string) {
    const order = await this.repository.findOrderById(id);
    for (let i = 0; i < order.subOrder.length; i++) {
      if (!order.subOrder[i].delivered) {
        return false;
      }
    }
    console.log('All items delivered');
    await this.notifyControlTower({ ...order, orderId: id });
    return true;
  }
}
