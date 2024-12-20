import { PrismaClient } from '@prisma/client';

import app from './app';

const PORT = 8080;
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('Connected to the database');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Error connecting to database');
    process.exit(1);
  }
}

main();

export default prisma;
