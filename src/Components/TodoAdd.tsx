import { Dispatch, SetStateAction, useState } from "react";
import { Iitem } from "../models";

interface TodoAddProps {
  todos: Iitem[];
  setTodos: Dispatch<SetStateAction<Iitem[]>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

export function TodoAdd({ todos, setTodos, id, setId }: TodoAddProps) {
  const [text, setText] = useState<string>("");

  function addHandler(event: any) {
    event.preventDefault();
    if (text.trim().length) {
      setTodos([...todos, { message: text, isDone: false, id: id }]);
      setId((prev) => prev + 1);
    }
    setText("");
  }

  console.log("TodoAdd");

  return (
    <form onSubmit={addHandler} className="flex flex-col m-2 items-center">
      <input
        className="border p-1 my-2 w-full border-zinc-500 outline-0"
        placeholder="input new todo"
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></input>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60"
      >
        add todo
      </button>
    </form>
  );
}
