import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todo);
  const sortedTodos = [...todos].sort((a, b) => {
    return new Date(b.todoDate).valueOf() - new Date(a.todoDate).valueOf();
  });
  return sortedTodos;
}
