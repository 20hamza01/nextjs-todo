'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const deleteTodo = async (formData: FormData) => {
  const id = formData.get('id') as string;

  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath('/');
};

export default deleteTodo;
