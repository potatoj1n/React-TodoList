import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers } from 'redux';
import todo, { TodosState } from './reducers/Todo';

const rootReducer = combineReducers({
  todo,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
};

export interface RootState {
  todo: TodosState;
}

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
});

export default store;
