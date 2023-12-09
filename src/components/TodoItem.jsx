import { useState } from "react";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  return (
    <li className="flex items-center px-20 py-3 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
        className="h-6 w-6 rounded-md border-2 border-gray-300 checked:bg-blue-500 checked:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none appearance-none"
      />

      <p
        className={`ml-4 text-lg font-semibold ${
          itemProp.completed ? "line-through text-gray-500" : "text-gray-800"
        } capitalize`}
      >
        {itemProp.title}
      </p>

      <button onClick={handleEditing}>Edit</button>
      <button
        onClick={() => delTodo(itemProp.id)}
        className="ml-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-full inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Remove
      </button>
      <input
        type="text"
        value={itemProp.title}
        className={`${
          editing ? "block" : "hidden"
        } ml-4 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 flex-grow`}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
