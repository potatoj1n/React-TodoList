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
    <div className="justify-betweentext-sm absolute bottom-8 m-2 flex w-full items-center text-sm font-medium text-gray-500">
      <p className="">{`할 일 : ${uncheckedTodoCount} 개`}</p>
      <div className="absolute right-16 mt-2 flex items-center">
        <span className="material-symbols-outlined mr-1 text-base">cancel</span>
        <button onClick={handleReset}>초기화</button>
      </div>
    </div>
  );
}
