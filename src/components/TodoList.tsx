import useTodos from 'pnpm-react/src/hooks/useTodos.tsx';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useTodos();
  return (
    <ul className="max-h-9flex-wrap relative flex-col overflow-y-auto" style={{ maxHeight: '400px' }}>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
