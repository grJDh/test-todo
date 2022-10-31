import { useRef, useState } from "react";

import ToDoItem from "../components/TodoItem/TodoItem";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState(["1", "2", "3"]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addItem = () => {
    const value = inputRef.current?.value;
    if (value !== undefined && value !== "") {
      setTodoList(prevList => [...prevList, value]);
      if (inputRef.current !== null) inputRef.current.value = "";
    }
  };

  const removeItem = (id: number) => {
    setTodoList(prevList => [...prevList.slice(0, id), ...prevList.slice(id + 1)]);
  };

  return (
    <div className="flex w-1/3 h-1/2 bg-white flex-col shadow-xl">
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={addItem}>+</button>
      {todoList.map((el, i) => (
        <ToDoItem
          text={el}
          id={i}
          removeItem={removeItem}
          key={i}
        />
      ))}
    </div>
  );
};

export default ToDoApp;
