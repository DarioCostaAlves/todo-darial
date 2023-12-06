import { useState } from "react";
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
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
  ]);

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    console.log(todos);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    </div>
  );
};

export default TodosLogic;
