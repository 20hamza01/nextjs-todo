'use client';

import { Button } from '@/components/ui/button';
import deleteTodo from '@/app/actions/deleteTodo';

export default function DeleteTodoForm({ id }: { id: string }) {
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append('id', id);
    await deleteTodo(formData);
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
}
