import { useTodoSelector } from './useTodos';

export default function useUncheckedTodoCount() {
  const todos = useTodoSelector(state => state.todo);
  const uncheckedTodos = Object.values(todos).filter(todo => !todo.done);
  return uncheckedTodos.length;
}
