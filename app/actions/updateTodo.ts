'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const updateTodo = async (formData: FormData) => {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;

  try {
    await prisma.todo.update({
      where: { id },
      data: {
        title,
      },
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath('/');
};

export default updateTodo;
