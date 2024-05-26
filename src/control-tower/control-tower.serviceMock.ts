import { ControlTowerService } from './control-tower.service';

export class ControlTowerServiceMock extends ControlTowerService{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async notifyControlTower(order): Promise<void> {
    console.log('Notifying control tower');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async checkAllItemsDelivered(id: string): Promise<boolean> {
    return Promise.resolve(false);
  }
}