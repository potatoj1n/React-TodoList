import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoReset from './components/TodoReset';
import './styles/App.css';

function App() {
  return (
    <div className="flex h-screen w-screen cursor-pointer items-center justify-center bg-gray-200">
      <div
        className=" m-4 rounded-2xl bg-white p-6 shadow-2xl lg:w-2/4  lg:max-w-xl"
        style={{ width: '900px', height: '700px' }}
      >
        <TodoForm />
        <h1 className="mt-8 text-lg font-semibold ">Today&apos;s Todo List</h1>
        <TodoList />
        <hr className=" mt-7 border-t border-gray-300"></hr>
        <TodoReset />
      </div>
    </div>
  );
}

export default App;
