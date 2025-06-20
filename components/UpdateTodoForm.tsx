'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import updateTodo from '@/app/actions/updateTodo';

type Props = {
  todo: { id: string; title: string };
};

export const updateTodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: 'Title is required' }),
});

const UpdateTodoForm = ({ todo }: Props) => {
  const form = useForm<z.infer<typeof updateTodoSchema>>({
    resolver: zodResolver(updateTodoSchema),
    defaultValues: { id: todo.id, title: '' },
  });

  const onSubmit = async (data: z.infer<typeof updateTodoSchema>) => {
    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('title', data.title);
    await updateTodo(formData);
    form.reset({ id: todo.id, title: '' });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Update todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">
          Update
        </Button>
      </form>
    </Form>
  );
};

export default UpdateTodoForm;
