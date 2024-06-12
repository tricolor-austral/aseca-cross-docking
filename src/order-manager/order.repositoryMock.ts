import { OrderRepository } from './order.repository';
import { ProductAmmount } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepositoryMock extends OrderRepository {
  private orders = [];
  private nextId = '1';
  private nextSubOrderId = '0';
  private nextProductAmountId = '0';

  async createOrder(order: CreateOrderDto) {
    const createdOrder = {
      id: this.nextId,
      delivered: false,
      clientId: order.clientId,
      client: { id: order.clientId, name: 'john doe', address: 'su casa' },
      subOrder: order.subOrders.map((subOrder) => {
        this.nextSubOrderId = (parseInt(this.nextSubOrderId) + 1).toString();
        return {
          id: this.nextSubOrderId,
          orderId: this.nextId,
          delivered: false,
          supplierId: subOrder.supplierId,
          productAmmount: subOrder.productAmount.map((productAmmount) => {
            this.nextProductAmountId = (
              parseInt(this.nextProductAmountId) + 1
            ).toString();
            return {
              id: this.nextProductAmountId,
              subOrderId: this.nextSubOrderId,
              productId: productAmmount.productId,
              ammount: productAmmount.amount,
            } as ProductAmmount;
          }),
        };
      }),
    };
    this.orders.push(createdOrder);
    this.nextId = (parseInt(this.nextId) + 1).toString();
    return Promise.resolve(createdOrder);
  }
  async updateOrderDelivery(id: string) {
    const order = this.orders.find((order) => order.id === id);
    if (!order) return null;
    order.delivered = true;
    return Promise.resolve({
      client: order.client,
      delivered: order.delivered,
      id: order.id,
      clientId: order.clientId,
    });
  }
  async getById(id: string) {
    return this.orders.find((order) => order.id === id);
  }
}
