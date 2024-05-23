import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //create supplier
  await prisma.supplier.upsert({
    where: { id: 'supplierId' },
    update: {
      name: 'supplier 1',
    },
    create: {
      id: 'supplierId',
      name: 'supplier 1',
    },
  });

  //create client
  await prisma.client.upsert({
    where: { id: 'clientId' },
    update: {
      name: 'John Doe',
      address: 'main st. 123',
    },
    create: {
      name: 'John Doe',
      address: 'main st. 123',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
