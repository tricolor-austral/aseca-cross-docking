import { CreateSuborderDto } from '../../sub-order-manager/dto/create-suborder.dto';

export class CreateOrderDto {
  id: string;
  clientId: string;
  subOrders: CreateSuborderDto[];

  constructor(clientId: string, subOrders: CreateSuborderDto[], id: string) {
    this.clientId = clientId;
    this.subOrders = subOrders;
    this.id = id;
  }
}
