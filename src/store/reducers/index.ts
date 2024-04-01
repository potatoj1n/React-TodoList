import { combineReducers } from 'redux';
import todo, { TodosState } from './Todo';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
