import { Todo } from '../store/reducers/Todo';
import useTodoActions from '../hooks/useTodoActions';
import useEditMode from '../hooks/useEditTodo';

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onUpdate, onRemove } = useTodoActions(todo.id);

  const { isEditing, text, handleToggleEdit, handleInputChange, handleUpdate, handleKeyDown } = useEditMode(
    todo.text,
    onUpdate,
  );

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
      className={`my-1 h-12 cursor-pointer rounded-md border p-1 font-medium ${todo.done ? 'bg-gray-100 text-gray-500 line-through' : 'bg-white'}`}
    >
      <li className={`TodoItem ${todo.done ? 'text-gray-500 line-through ' : ''}`}>
        <label>
          <input type="checkbox" defaultChecked={todo.done} onChange={onToggle} className="m-3 h-4 w-4" />
          {isEditing ? (
            <input
              type="text"
              value={text}
              onChange={handleInputChange}
              onBlur={handleUpdate}
              onKeyDown={handleKeyDown}
              className="w-80 border-b border-gray-400 text-sm font-normal outline-none focus:w-80 focus:border-blue-400"
            />
          ) : (
            <span className="text text-base font-normal" onClick={handleToggleEdit}>
              {todo.text}
            </span>
          )}
        </label>

        <div className="float-right mt-1 flex items-center text-gray-500">
          <span className="mr-1 text-xs">{formattedDateString}</span>
          {!isEditing && (
            <span className="material-symbols-outlined mx-2 text-base" onClick={handleToggleEdit}>
              edit
            </span>
          )}
          <span className="material-symbols-outlined mr-2  text-lg hover:text-xl" onClick={onRemove}>
            delete
          </span>
        </div>
      </li>
    </div>
  );
}
