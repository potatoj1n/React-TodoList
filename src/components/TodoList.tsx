import useTodos from 'pnpm-react/src/hooks/useTodos.tsx';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, sortUncheckedTodos } = useTodos();

  const checkedTodos = todos.filter(todo => todo.done);
  const uncheckedTodos = sortUncheckedTodos(todos);
  return (
    <div className="relative max-h-96 overflow-y-auto" style={{ maxHeight: '400px' }}>
      <ul className="flex-col">
        {uncheckedTodos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
        <div className="mt-auto">
          {checkedTodos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
