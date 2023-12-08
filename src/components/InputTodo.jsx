import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar tarefa..."
          value={title}
          onChange={handleChange}
        />
        <button>Submeter</button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;
