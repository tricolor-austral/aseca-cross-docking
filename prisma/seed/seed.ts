import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //create supplier
  await prisma.supplier.upsert({
    where: { id: 'supplierA' },
    update: {
      name: 'John Doe',
    },
    create: {
      id: 'supplierA',
      name: 'John Doe',
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
      id: 'clientId',
      name: 'John Doe',
      address: 'main st. 123',
    },
  });

  await prisma.supplier.upsert({
    where: { id: 'supplierB' },
    update: {
      name: 'James Bond',
    },
    create: {
      id: 'supplierB',
      name: 'James Bond',
    },
  });

  await prisma.supplier.upsert({
    where: { id: 'supplierC' },
    update: {
      name: 'Janice Altman',
    },
    create: {
      id: 'supplierC',
      name: 'Janice Altman',
    },
  });

  await prisma.order.upsert({
    where: { id: 'orderA' },
    update: {
      clientId: 'clientId',
      delivered: false,
    },
    create: {
      id: 'orderA',
      clientId: 'clientId',
      delivered: false,
    }
  })

  await prisma.subOrder.upsert({
    where: { id: 'subOrderA1' },
    update: {
      orderId: 'orderA',
      supplierId: 'supplierA',
      delivered: false,
    },
    create: {
      id: 'subOrderA1',
      orderId: 'orderA',
      supplierId: 'supplierA',
      delivered: false,
    }
  })

  await prisma.subOrder.upsert({
    where: { id: 'subOrderA2' },
    update: {
      orderId: 'orderA',
      supplierId: 'supplierB',
      delivered: false,
    },
    create: {
      id: 'subOrderA2',
      orderId: 'orderA',
      supplierId: 'supplierB',
      delivered: false,
    }
  })


  await prisma.order.upsert({
    where: { id: 'orderB' },
    update: {
      clientId: 'clientId',
      delivered: false,
    },
    create: {
      id: 'orderB',
      clientId: 'clientId',
      delivered: false,
    }
  })

  await prisma.subOrder.upsert({
    where: { id: 'subOrderB1' },
    update: {
      orderId: 'orderA',
      supplierId: 'supplierA',
      delivered: false,
    },
    create: {
      id: 'subOrderB1',
      orderId: 'orderA',
      supplierId: 'supplierA',
      delivered: false,
    }
  })

  await prisma.subOrder.upsert({
    where: { id: 'subOrderB2' },
    update: {
      orderId: 'orderA',
      supplierId: 'supplierB',
      delivered: false,
    },
    create: {
      id: 'subOrderB2',
      orderId: 'orderA',
      supplierId: 'supplierB',
      delivered: false,
    }
  })

  await prisma.productAmmount.upsert({
    where: { id: 'PaA1' },
    update: {
      subOrderId: 'subOrderA1',
      productId: 'productA',
      ammount: 10,
    },
    create: {
      id: 'PaA1',
      subOrderId: 'subOrderA1',
      productId: 'productA',
      ammount: 10,
    }
  })

  await prisma.productAmmount.upsert({
    where: { id: 'PaA2' },
    update: {
      subOrderId: 'subOrderA2',
      productId: 'productA',
      ammount: 10,
    },
    create: {
      id: 'PaA2',
      subOrderId: 'subOrderA2',
      productId: 'productA',
      ammount: 10,
    }
  })

  await prisma.productAmmount.upsert({
    where: { id: 'PaB1' },
    update: {
      subOrderId: 'subOrderB1',
      productId: 'productA',
      ammount: 10,
    },
    create: {
      id: 'PaB1',
      subOrderId: 'subOrderB1',
      productId: 'productA',
      ammount: 10,
    }
  })

  await prisma.productAmmount.upsert({
    where: { id: 'PaB2' },
    update: {
      subOrderId: 'subOrderB2',
      productId: 'productA',
      ammount: 10,
    },
    create: {
      id: 'PaB2',
      subOrderId: 'subOrderB2',
      productId: 'productA',
      ammount: 10,
    }
  })
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
