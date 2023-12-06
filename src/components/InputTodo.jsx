import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleChange}>
      <input
        type="text"
        placeholder="Adicionar tarefa..."
        value={title}
        onChange={handleChange}
      />
      <button>Submeter</button>
    </form>
  );
};

export default InputTodo;
