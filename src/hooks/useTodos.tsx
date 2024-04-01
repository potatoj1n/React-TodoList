import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Todo } from '../store/reducers/Todo';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todo);
  const sortUncheckedTodos = (todos: Todo[]) => {
    return todos
      .filter(todo => !todo.done)
      .sort((a, b) => new Date(b.todoDate).valueOf() - new Date(a.todoDate).valueOf());
  };

  return { todos, sortUncheckedTodos };
}
