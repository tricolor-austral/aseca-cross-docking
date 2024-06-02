import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma-service';
import { ControlTowerService } from './control-tower.service';
import { ControlTowerRepository } from './control-tower.repository';
import { ControlTowerRepositoryMock } from './control-tower.repositoryMock';

describe('Control tower', () => {
  let ctService: ControlTowerService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        ControlTowerService,
        {
          provide: ControlTowerRepository,
          useClass: ControlTowerRepositoryMock,
        },
      ],
    }).compile();
    ctService = moduleFixture.get<ControlTowerService>(ControlTowerService);
  });
  it('should be defined', () => {
    expect(ctService).toBeDefined();
  });
  it('notify control tower', async () => {
    const order = {
      orderId: '1',
      clientId: '1',
    };
    await ctService.notifyControlTower(order);
  });
  it('should check all are delivered and return true', async () => {
    const result = await ctService.checkAllItemsDelivered('1');
    expect(result).toBe(true);
  });
  it('should check not all items delivered and return false', async () => {
    const result = await ctService.checkAllItemsDelivered('2');
    expect(result).toBe(false);
  });
  it('should check non is delivered and return false', async () => {
    const result = await ctService.checkAllItemsDelivered('3');
    expect(result).toBe(false);
  });
});
