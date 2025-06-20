'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const addTodo = async (formData: FormData) => {
  const title = formData.get('title') as string;

  try {
    await prisma.todo.create({
      data: {
        title,
      },
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath('/');
};

export default addTodo;
