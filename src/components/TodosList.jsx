import TodoItem from "@/components/TodoItem";
import { useContext } from "react";
import { useTodosContext } from "@/context/TodosContext";

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
