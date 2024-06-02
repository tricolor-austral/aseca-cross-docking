import { ClientRepository } from './client.repository';

export class ClientRepositoryMock extends ClientRepository {
  private nextId = '2';
  private clients = [
    {
      id: '1',
      name: 'James Bond',
      address: '107 Park Ave Ny, Ny',
    },
  ];

  async findOrCreateByName(id: string) {
    if (this.clients.find((client) => client.id === id)) {
      return this.clients.find((client) => client.id === id);
    }
    return {
      id: this.nextId,
      name: 'John Doe',
      address: '107 Park Ave Ny, Ny',
    };
  }
}
