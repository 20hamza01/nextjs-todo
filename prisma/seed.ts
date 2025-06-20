import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'Workout',
  },
  {
    title: 'Fill notion cheatsheet',
  },
  {
    title: 'Pray',
  },
];

export async function main() {
  for (const u of todoData) {
    await prisma.todo.create({ data: u });
  }
}

main();
