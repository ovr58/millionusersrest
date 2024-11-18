import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const users = Array.from({ length: 1000000 }, () => ({
    name: faker.person.fullName(),
    problemata: faker.datatype.boolean(),
  }));

  console.log('Starting to seed the database with 1 million users...');

  for (let i = 0; i < users.length; i += 1000) {
    const chunk = users.slice(i, i + 1000);
    await prisma.user.createMany({
      data: chunk,
    });
    console.log(`Inserted ${i + chunk.length} users`);
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
