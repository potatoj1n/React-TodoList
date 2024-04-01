import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

export default function useUncheckedTodoCount() {
  const todos = useSelector((state: RootState) => state.todo);
  const uncheckedTodos = todos.filter(todo => !todo.done);
  return uncheckedTodos.length;
}
