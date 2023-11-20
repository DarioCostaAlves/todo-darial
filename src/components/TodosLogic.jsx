import React from "react";
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";

const TodosLogic = () => {
  const todos = [
    {
      id: 1,
      title: "Criar ambiente de desenvolvimento",
      completed: true,
    },
    {
      id: 2,
      title: "Desenvolver website e adicionar conteúdo",
      completed: false,
    },
    {
      id: 3,
      title: "Alojar para um serviço de alojamento",
      completed: false,
    },
  ];
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} />
    </div>
  );
};

export default TodosLogic;
