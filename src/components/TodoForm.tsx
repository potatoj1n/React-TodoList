import { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

export default function TodoForm() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-11 cursor-pointer rounded border bg-gray-100 pt-2 shadow-sm hover:border-2 hover:border-sky-200 hover:bg-white hover:shadow-inner"
    >
      <input
        placeholder="Add Todo List"
        value={value}
        onChange={onChange}
        className="m-1 w-full bg-transparent px-2 py-2 text-base focus:outline-none"
      />
      <button
        type="submit"
        className="material-symbols-outlined float-right mr-3 h-7 w-16 rounded-md border bg-slate-300 text-lg hover:bg-slate-100 hover:text-gray-800"
      >
        playlist_add
      </button>
    </form>
  );
}
