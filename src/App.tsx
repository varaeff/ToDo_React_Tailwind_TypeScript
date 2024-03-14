import { useState } from "react";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import { TodoAdd } from "./Components/TodoAdd";
import { Iitem } from "./models";

function App() {
  const [todos, setTodos] = useState<Iitem[]>([]);
  const [filter, setFilter] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  return (
    <div className="w-1/2">
      <TodoAdd todos={todos} setTodos={setTodos} id={id} setId={setId} />
      <TodoList todos={todos} filter={filter} setTodos={setTodos} />
      <div>
        <button
          onClick={() => setFilter(0)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-60"
        >
          Show all
        </button>
        <button
          onClick={() => setFilter(1)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-60"
        >
          Show completed
        </button>
        <button
          onClick={() => setFilter(2)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-60"
        >
          Show uncompleted
        </button>
      </div>
    </div>
  );
}

export default App;
