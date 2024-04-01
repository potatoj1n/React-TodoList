import { Todo } from '../store/reducers/Todo';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onUpdate, onRemove } = useTodoActions(todo.id);

  const handleClickUpdate = () => {
    const newText = prompt('repair Todo List:', todo.text);
    if (newText !== null && newText !== '') {
      onUpdate(newText);
    }
  };

  const formattedDate = new Date(todo.todoDate);
  const formattedDateString = formattedDate.toLocaleString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div
      className={`my-1 h-10 cursor-pointer rounded-md border p-1 ${todo.done ? 'bg-gray-100 text-gray-500 line-through' : 'bg-white'}`}
    >
      <li className={`TodoItem ${todo.done ? 'text-gray-500 line-through ' : ''}`}>
        <label>
          <input type="checkbox" defaultChecked={todo.done} onChange={onToggle} />
          <span className="text ml-4 text-sm font-normal">{todo.text}</span>
        </label>

        <div className="float-right flex items-center  text-gray-500">
          <span className="mr-1 text-xs ">{formattedDateString}</span>
          <span className="material-symbols-outlined mx-2 text-base" onClick={handleClickUpdate}>
            edit
          </span>
          <span className="material-symbols-outlined mr-2 text-lg hover:text-xl" onClick={onRemove}>
            delete
          </span>
        </div>
      </li>
    </div>
  );
}
