import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable } from '@nestjs/common';
import { ControlTowerService } from '../control-tower/control-tower.service';

@Injectable()
export class OrderService {
  constructor(
    private repository: OrderRepository,
    private ctService: ControlTowerService,
  ) {}
  async createOrder(orderCreate: CreateOrderDto) {
    console.log(this.repository);
    return this.repository.createOrder(orderCreate);
  }

  async updateWholeDelivery(id: string) {
    const order = await this.repository.updateOrderDelivery(id);
    await this.ctService.notifyControlTower(order);
    return order;
  }

  async getOrderState(id: string) {
    return this.repository.getOrderState(id);
  }

  async getOrders() {
    return this.repository.findAll();
  }
}
