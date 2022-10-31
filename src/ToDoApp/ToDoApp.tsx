import { useEffect, useRef, useState } from "react";

import Input from "../components/Input/Input";
import ToDoItem from "../components/TodoItem/TodoItem";
import Footer from "../components/Footer/Footer";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([
    {
      text: "Приготовить ужин",
      finished: false,
    },
    {
      text: "Почистить обувь",
      finished: true,
    },
    {
      text: "Написать программу",
      finished: false,
    },
  ]);
  const [numberOfLeftToDo, setNumberOfLeftToDo] = useState(1);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const addItem = () => {
    const value = inputRef.current?.value;
    if (value !== undefined && value !== "") {
      setTodoList(prevList => [...prevList, { text: value, finished: false }]);
      if (inputRef.current !== null) inputRef.current.value = "";
    }
  };

  const removeItem = (id: number) => {
    setTodoList(prevList => [...prevList.slice(0, id), ...prevList.slice(id + 1)]);
  };

  const toggleItem = (id: number) => {
    setTodoList(prevList => {
      let tempList = [...prevList];
      let tempItem = { ...tempList[id] };
      tempItem.finished = !tempItem.finished;
      tempList[id] = tempItem;

      return tempList;
    });
  };

  const clearCompleted = () => {
    const newList = todoList.filter(item => !item.finished);
    setTodoList(newList);
  };

  useEffect(() => {
    const countedNumberOfLeft = todoList.reduce((sum, item) => {
      if (!item.finished) return sum + 1;
      else return sum;
    }, 0);
    setNumberOfLeftToDo(countedNumberOfLeft);
  }, [todoList]);

  return (
    <div className="flex w-5/6 max-w-screen-sm min-w-[340px] h-1/2 bg-white flex-col shadow-xl justify-between">
      <div>
        <Input
          refProp={inputRef}
          addItem={addItem}
        />
        <ul>
          {todoList.map((el, id) => (
            <ToDoItem
              text={el.text}
              id={id}
              finished={el.finished}
              removeItem={removeItem}
              toggleItem={toggleItem}
              key={id}
            />
          ))}
        </ul>
      </div>
      <Footer
        numberOfLeftToDo={numberOfLeftToDo}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default ToDoApp;
