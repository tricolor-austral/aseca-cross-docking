import { CreateSuborderDto } from '../../sub-order-manager/dtos/create-suborder.dto';

export class CreateOrderDto {
  id: string;
  clientId: string;
  subOrders: CreateSuborderDto[];

  constructor(id: string, clientId: string, subOrders: CreateSuborderDto[]) {
    this.id = id;
    this.clientId = clientId;
    this.subOrders = subOrders;
  }
}
