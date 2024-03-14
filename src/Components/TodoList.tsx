import { Dispatch, SetStateAction } from "react";
import { Iitem } from "../models";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Iitem[];
  filter: number;
  setTodos: Dispatch<SetStateAction<Iitem[]>>;
}

export function TodoList({ todos, filter, setTodos }: TodoListProps) {
  console.log("TodoList");

  return (
    <div className="w-full py-2">
      {todos.map((item) => {
        if (
          !filter ||
          (filter === 1 && item.isDone) ||
          (filter === 2 && !item.isDone)
        )
          return <TodoItem item={item} key={item.id} setTodos={setTodos} />;
        else return null;
      })}
    </div>
  );
}
