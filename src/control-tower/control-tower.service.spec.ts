import { Test, TestingModule } from '@nestjs/testing';
import { ControlTowerService } from './control-tower.service';

describe('ControlTowerService', () => {
  let service: ControlTowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControlTowerService],
    }).compile();

    service = module.get<ControlTowerService>(ControlTowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
