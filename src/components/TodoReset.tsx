import { useDispatch } from 'react-redux';
import { resetTodo } from '../store/reducers/Todo';
import useUncheckedTodoCount from 'pnpm-react/src/hooks/useUnckeckedTodoCount.tsx';

export default function TodoReset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetTodo());
  };
  const uncheckedTodoCount = useUncheckedTodoCount();
  return (
    <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
      <p>{`할 일 : ${uncheckedTodoCount} 개`} </p>
      <div className="mr-2 flex items-center ">
        <span className="material-symbols-outlined text-base">cancel</span>
        <button onClick={handleReset} className="ml-1">
          초기화
        </button>
      </div>
    </div>
  );
}
