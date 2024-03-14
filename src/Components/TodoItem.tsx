import { Dispatch, SetStateAction } from "react";
import { Iitem } from "../models";

interface TodoItemProps {
  item: Iitem;
  setTodos: Dispatch<SetStateAction<Iitem[]>>;
}

export function TodoItem({ item, setTodos }: TodoItemProps) {
  function handleChange() {
    setTodos((prev) =>
      prev.map((el) => (el.id === item.id ? { ...el, isDone: !el.isDone } : el))
    );
  }

  function handleDel() {
    setTodos((prev) => prev.filter((el) => el.id !== item.id));
  }

  return (
    <div className="border px-5 py-1 align-middle w-full flex justify-between">
      <label className={item.isDone ? "line-through" : ""}>
        <input
          type="checkbox"
          checked={item.isDone}
          onChange={handleChange}
          className="mx-2"
        />
        {item.message}
      </label>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded"
        onClick={handleDel}
      >
        del
      </button>
    </div>
  );
}
