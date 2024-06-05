import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { ControlTowerService } from '../control-tower/control-tower.service';

@Injectable()
export class OrderService {
  constructor(
    private repository: OrderRepository,
    private ctService: ControlTowerService,
  ) {}
  async createOrder(orderCreate: CreateOrderDto) {
    return this.repository.createOrder(orderCreate);
  }

  async updateWholeDelivery(id: string) {
    const actual = await this.repository.getById(id);
    if (!actual) {
      throw new HttpException('Order not found', 404);
    }
    if (actual.delivered) {
      throw new HttpException('Order already delivered', 400);
    }
    const order = await this.repository.updateOrderDelivery(id);
    await this.ctService.notifyControlTower({ ...order, orderId: id });
    return order;
  }

  async getOrderState(id: string) {
    return this.repository.getOrderState(id);
  }

  async getOrders() {
    return this.repository.findAll();
  }
}
