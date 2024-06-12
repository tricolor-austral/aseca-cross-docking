import { SubOrderRepository } from './sub-order.repository';

export class SubOrderRepositoryMock extends SubOrderRepository {
  private nextId = 1;
  async updateDelivery(id: string): Promise<any> {
    if (id === '1') {
      return {
        id: '1',
        delivered: true,
        productAmmount: [],
      };
    } else return null;
  }

  async createSubOrder(subOrderCreate: any, id: string): Promise<any> {
    const selfid = this.nextId.toString();
    this.nextId++;
    return {
      id: selfid,
      delivered: false,
      orderId: id,
      supplierId: subOrderCreate.supplierId,
      productAmmount: [],
    };
  }

  async getAll(): Promise<any[]> {
    return [
      {
        id: '1',
        delivered: false,
        orderId: '1',
        supplierId: '1',
        productAmmount: [],
      },
    ];
  }

  async getSubOrderById(id: string): Promise<any> {
    if (id === '1') {
      return {
        id: '1',
        delivered: false,
        orderId: '1',
        supplierId: '1',
        productAmmount: [],
      };
    } else return null;
  }
}
