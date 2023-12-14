import { useState } from "react";
import { useTodosContext } from "@/context/TodosContext";

const InputTodo = () => {
  const { addTodoItem } = useTodosContext();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Por favor, adicione uma tarefa.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Adicionar tarefa..."
          value={title}
          onChange={handleChange}
          className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Submeter
        </button>
      </form>
      <span className="text-gray-500 mt-2 block text-center mx-auto max-w-md">
        {message}
      </span>
    </>
  );
};

export default InputTodo;
