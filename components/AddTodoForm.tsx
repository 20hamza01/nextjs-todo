'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import addTodo from '@/app/actions/addTodo';

export const addTodoSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
});

const AddTodoForm = () => {
  const form = useForm<z.infer<typeof addTodoSchema>>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: { title: '' },
  });

  const onSubmit = async (data: z.infer<typeof addTodoSchema>) => {
    const formData = new FormData();
    formData.append('title', data.title);
    await addTodo(formData);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="Add a new todo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
};

export default AddTodoForm;
