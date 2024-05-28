import { CreateSuborderDto } from '../../sub-order-manager/dto/create-suborder.dto';

export class CreateOrderDto {
  clientId: string;
  subOrders: CreateSuborderDto[];

  constructor(clientId: string, subOrders: CreateSuborderDto[]) {
    this.clientId = clientId;
    this.subOrders = subOrders;
  }
}
