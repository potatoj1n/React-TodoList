import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  todoDate: string;
}

export type TodosState = Todo[];

const initialState: TodosState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const nextId = state.length > 0 ? Math.max(...state.map(todo => todo.id)) + 1 : 1;
      state.push({
        id: nextId,
        text: action.payload,
        done: false,
        todoDate: new Date().toISOString(),
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    resetTodo: () => {
      return [];
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, removeTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
