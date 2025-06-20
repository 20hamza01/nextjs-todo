import prisma from '@/lib/prisma';
import AddTodoForm from '@/components/AddTodoForm';
import UpdateTodoForm from '@/components/UpdateTodoForm';
import DeleteTodoForm from '@/components/DeleteTodoForm';

export default async function Home() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Todo List</h1>
      {/* <form action={addTodo} className="mb-4">
        <input
          name="title"
          type="text"
          placeholder="Add a new todo"
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mr-2 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </form> */}
      <AddTodoForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow my-2"
          >
            <span className="text-lg text-black">{todo.title}</span>
            <div className="flex gap-4 items-center justify-between">
              {/* <form action={updateTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <input
                  name="title"
                  type="text"
                  placeholder="Update todo"
                  className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mr-2 text-black"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                >
                  Update
                </button>
              </form> */}

              <UpdateTodoForm todo={todo} />
              <DeleteTodoForm id={todo.id} />
              {/* <form action={deleteTodo}>
                <input type="hidden" name="id" id={todo.id} value={todo.id} />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </form> */}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
