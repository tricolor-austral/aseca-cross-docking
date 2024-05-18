import { Client } from '@prisma/client';
import { SubOrderCreate } from '../../sub-order-manager/dtos/sub-order-create';

export class OrderCreate {
  id: string;
  client: Client;
  subOrders: SubOrderCreate[];
}
