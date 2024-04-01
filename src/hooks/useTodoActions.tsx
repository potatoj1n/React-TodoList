import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodo, updateTodo, removeTodo } from '../store/reducers/Todo';

export default function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
  const onUpdate = useCallback((text: string) => dispatch(updateTodo({ id, text })), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

  return { onToggle, onUpdate, onRemove };
}
