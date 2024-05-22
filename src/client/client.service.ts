import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { ClientCreateDto } from './dto/client-create-dto';

@Injectable()
export class ClientService {
  constructor(private repository: ClientRepository) {}
  async findOrCreate(clientDto: ClientCreateDto) {
    return this.repository.findOrCreateByName(clientDto);
  }
}
