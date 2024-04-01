import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoReset from './components/TodoReset';
import './styles/App.css';

function App() {
  return (
    <div className="flex h-screen w-screen cursor-pointer items-center justify-center bg-gray-200">
      <div
        className="relative m-4 rounded-2xl bg-white p-6 shadow-2xl lg:w-2/4 lg:max-w-xl"
        style={{ width: '700px', height: '650px' }}
      >
        <TodoForm />
        <h1 className="mb-2 mt-7 text-lg font-bold">Today&apos;s Todo List</h1>
        <TodoList />
        <hr className="absolute bottom-16 ml-1 border-t border-gray-300" style={{ width: '520px' }} />
        <TodoReset />
      </div>
    </div>
  );
}

export default App;
