import useTodos from 'pnpm-react/src/hooks/useTodos.tsx';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useTodos();
  return (
    <ul className="relative max-h-96 flex-col flex-wrap overflow-y-auto ">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      <div className=""></div>
    </ul>
  );
}

export default TodoList;
