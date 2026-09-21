const TodoDetailsPage = async ({ params }) => {
  const { todoId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  const todo = await res.json();
  return (
    <div>
      <h1>Details</h1>
      <h1>ID: {todo.id}</h1>
      <h1>Title: {todo.title}</h1>
      <h1>Status: {todo.completed ? "Completed" : "Incomplete"}</h1>
    </div>
  );
};

export default TodoDetailsPage;
