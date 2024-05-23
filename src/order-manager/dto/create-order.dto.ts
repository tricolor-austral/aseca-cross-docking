import { CreateSuborderDto } from '../../sub-order-manager/dto/create-suborder.dto';
import { ClientCreateDto } from '../../client/dto/client-create-dto';

export class CreateOrderDto {
  client: ClientCreateDto;
  subOrders: CreateSuborderDto[];

  constructor(client: ClientCreateDto, subOrders: CreateSuborderDto[]) {
    this.client = client;
    this.subOrders = subOrders;
  }
}
