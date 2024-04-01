import useTodos from 'pnpm-react/src/hooks/useTodos.tsx';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useTodos();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
