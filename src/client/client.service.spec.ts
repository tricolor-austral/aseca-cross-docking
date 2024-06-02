import { ClientService } from './client.service';
import { ClientRepository } from './client.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientRepositoryMock } from './client.repositoryMock';
import { PrismaService } from '../prisma-service';

describe('ClientService', () => {
  let clientService: ClientService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        ClientService,
        {
          provide: ClientRepository,
          useClass: ClientRepositoryMock,
        },
      ],
    }).compile();
    clientService = moduleFixture.get<ClientService>(ClientService);
  });
  it('should be defined', () => {
    expect(clientService).toBeDefined();
  });
  it('should create a client if it doesnt exist', async () => {
    const client = await clientService.findOrCreate('2');
    expect(client).toBeDefined();
    expect(client.id).toBe('2');
    expect(client.name).toBe('John Doe');
  });
  it('should return the client if it already exists', async () => {
    const clients = await clientService.findOrCreate('1');
    expect(clients).toBeDefined();
    expect(clients.name).toBe('James Bond');
  });
});
