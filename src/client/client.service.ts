import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';

@Injectable()
export class ClientService {
  constructor(private repository: ClientRepository) {}
  async findOrCreate(clientId: string) {
    return this.repository.findOrCreateByName(clientId);
  }
}
