import { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

export default function TodoForm() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim() !== '') {
      addTodo(value);
      setValue('');
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`flex h-11 cursor-pointer rounded border border-slate-200 bg-gray-100 pt-2 shadow-inner ${isFocused ? 'focus-within:border-2 focus-within:border-sky-400 focus-within:bg-white focus-within:shadow-inner' : ''}`}
    >
      <input
        placeholder="오늘의 할 일을 입력해주세요"
        value={value}
        onChange={onChange}
        className="mb-2 w-full bg-transparent px-2 py-2 text-sm font-medium focus:outline-none"
      />
      <button
        type="submit"
        className={`material-symbols-outlined float-right mr-3 h-6 w-11 rounded-md border border-gray-200 bg-slate-300 text-base ${isFocused ? 'hidden' : ''}`}
      >
        playlist_add
      </button>
    </form>
  );
}
