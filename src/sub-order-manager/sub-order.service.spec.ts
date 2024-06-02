import { SubOrderService } from './sub-order.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ControlTowerService } from '../control-tower/control-tower.service';
import { SubOrderRepository } from './sub-order.repository';
import { SubOrderRepositoryMock } from './sub-order.repositoryMock';
import { ControlTowerRepositoryMock } from '../control-tower/control-tower.repositoryMock';
import { ControlTowerRepository } from '../control-tower/control-tower.repository';
import { PrismaService } from '../prisma-service';
import { CreateSuborderDto } from './dto/create-suborder.dto';
import { ControlTowerServiceMock } from '../control-tower/control-tower.serviceMock';

describe('SubOrderService', () => {
  let service: SubOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        SubOrderService,
        {
          provide: SubOrderRepository,
          useClass: SubOrderRepositoryMock,
        },
        {
          provide: ControlTowerRepository,
          useClass: ControlTowerRepositoryMock,
        },
        {
          provide: ControlTowerService,
          useClass: ControlTowerServiceMock,
        },
      ],
    }).compile();

    service = module.get<SubOrderService>(SubOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a sub order', () => {
    const subOrDTO = new CreateSuborderDto('1', []);
    const result = service.createSubOrder(subOrDTO, '1');
    expect(result).toBeDefined();
  });
  it('should update a delivery and return delivered true', async () => {
    const result = await service.updateDelivery('1');
    expect(result).toBeDefined();
    expect(result.delivered).toBe(true);
  });
  it('should get all sub orders', async () => {
    const result = await service.getAll();
    expect(result).toBeDefined();
    expect(result.length).toBe(1);
  });
});
