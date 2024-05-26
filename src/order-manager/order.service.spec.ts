import { OrderService } from './order.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma-service';
import { OrderRepository } from './order.repository';
import { OrderRepositoryMock } from './order.repositoryMock';
import { ProductAmountCreate } from '../sub-order-manager/dto/product-amount-create';
import { CreateSuborderDto } from '../sub-order-manager/dto/create-suborder.dto';
import { ClientCreateDto } from '../client/dto/client-create-dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { ControlTowerService } from '../control-tower/control-tower.service';
import { ControlTowerServiceMock } from '../control-tower/control-tower.serviceMock';
import { ControlTowerRepository } from '../control-tower/control-tower.repository';
import { ClientService } from '../client/client.service';
import { SubOrderService } from '../sub-order-manager/sub-order.service';
import { ClientRepository } from '../client/client.repository';
import { SubOrderRepository } from '../sub-order-manager/sub-order.repository';

describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        OrderService,
        {
          provide: OrderRepository,
          useClass: OrderRepositoryMock,
        },
        {
          provide: ControlTowerService,
          useClass: ControlTowerServiceMock,
        },
        ControlTowerRepository,
        ClientService,
        SubOrderService,
        ClientRepository,
        SubOrderRepository,
      ],
    }).compile();
    orderService = moduleFixture.get<OrderService>(OrderService);

  });
  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });
    it('create an order', async () => {
      const clientCreate = new ClientCreateDto('client 1', 'address 1');
      const productAmmountCreate = new ProductAmountCreate('item 1', 10);
      const subOrderCreate = new CreateSuborderDto('supplier 1', [
        productAmmountCreate,
      ]);
      const orderCreate = new CreateOrderDto(clientCreate, [subOrderCreate]);
      const order = await orderService.createOrder(orderCreate);
      expect(order).toBeDefined();
      expect(order.client.name).toEqual('client 1');
      expect(order.subOrder).toHaveLength(1);
      expect(order.subOrder[0].productAmmount).toHaveLength(1);
    });
    it('update delivery', async () => {
      const order = createOrder();
      await orderService.createOrder(order);
      const deliveredOrder =  await orderService.updateWholeDelivery('1');
      expect(order).toBeDefined();
      expect(deliveredOrder.delivered).toBeTruthy();
    });

});

function createClient() {
  return new ClientCreateDto('client 1', 'address 1');
}

function createProductAmount() {
  return new ProductAmountCreate('item 1', 10);
}

function createSubOrder() {
  return new CreateSuborderDto('supplier 1', [createProductAmount()]);
}

function createOrder() {
  return new CreateOrderDto(createClient(), [createSubOrder()]);
}

