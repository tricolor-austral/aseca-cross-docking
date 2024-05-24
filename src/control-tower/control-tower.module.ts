import { Module } from '@nestjs/common';
import { ControlTowerService } from './control-tower.service';
import { PrismaService } from '../prisma-service';
import { ControlTowerRepository } from './control-tower.repository';

@Module({
  providers: [ControlTowerService, PrismaService, ControlTowerRepository],
  exports: [ControlTowerService, ControlTowerRepository],
})
export class ControlTowerModule {}
