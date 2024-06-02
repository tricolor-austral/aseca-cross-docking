import { ControlTowerRepository } from './control-tower.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ControlTowerRepositoryMock extends ControlTowerRepository {
  private orders = this.createorders();
  async findOrderById(id: string): Promise<any> {
    return this.orders.find((order) => order.id === id);
  }

  private createorders() {
    const alItemsDelivered = {
      id: '1',
      subOrder: [{ delivered: true }, { delivered: true }, { delivered: true }],
    };
    const notAllItemsDelivered = {
      id: '2',
      subOrder: [
        { delivered: true },
        { delivered: false },
        { delivered: true },
      ],
    };
    const noneItemsDelivered = {
      id: '3',
      subOrder: [
        { delivered: false },
        { delivered: false },
        { delivered: false },
      ],
    };
    return [alItemsDelivered, notAllItemsDelivered, noneItemsDelivered];
  }
}
