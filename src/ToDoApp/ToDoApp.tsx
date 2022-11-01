import { useEffect, useRef, useState } from "react";

import Input from "../components/Input/Input";
import ToDoItem from "../components/TodoItem/TodoItem";
import Footer from "../components/Footer/Footer";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1667248861470,
      text: "Тестовое задание",
      finished: false,
    },
    {
      id: 1667248805525,
      text: "Прекрасный код",
      finished: true,
    },
    {
      id: 1667248804108,
      text: "Покрыть тестами",
      finished: false,
    },
  ]);
  const [numberOfLeftToDo, setNumberOfLeftToDo] = useState(0);
  const [category, setCatefory] = useState("All");
  const [filteredTodoList, setFilteredTodoList] = useState([...todoList]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const addItem = () => {
    const value = inputRef.current?.value;
    if (value !== undefined && value !== "") {
      setTodoList(prevList => [...prevList, { id: new Date().getTime(), text: value, finished: false }]);
      if (inputRef.current !== null) inputRef.current.value = "";
    }
  };

  const removeItem = (id: number) => {
    const filteredList = todoList.filter(item => item.id !== id);
    setTodoList(filteredList);
  };

  const toggleItem = (id: number) => {
    setTodoList(prevList => {
      const indexOfItem = prevList.findIndex(item => item.id === id);

      let tempList = [...prevList];
      let tempItem = { ...tempList[indexOfItem] };
      tempItem.finished = !tempItem.finished;
      tempList[indexOfItem] = tempItem;

      return tempList;
    });
  };

  const clearCompleted = () => {
    const newList = todoList.filter(item => !item.finished);
    setTodoList(newList);
  };

  const onCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => setCatefory(event.target.value);

  useEffect(() => {
    const countedNumberOfLeft = todoList.reduce((sum, item) => {
      if (!item.finished) return sum + 1;
      else return sum;
    }, 0);
    setNumberOfLeftToDo(countedNumberOfLeft);
  }, [todoList]);

  useEffect(() => {
    let filteredList = [];

    switch (category) {
      case "Active":
        filteredList = todoList.filter(item => !item.finished);
        break;
      case "Completed":
        filteredList = todoList.filter(item => item.finished);
        break;
      default:
        filteredList = [...todoList];
        break;
    }

    setFilteredTodoList(filteredList);
  }, [todoList, category]);

  return (
    <div
      className="flex w-5/6 max-w-screen-sm min-w-[340px] h-1/2 bg-white flex-col shadow-xl justify-between rounded-xl
                relative"
    >
      <div className="overflow-hidden shadow-md">
        <Input
          refProp={inputRef}
          addItem={addItem}
        />
        <ul className="h-full">
          {filteredTodoList.map(item => (
            <ToDoItem
              text={item.text}
              id={item.id}
              finished={item.finished}
              removeItem={removeItem}
              toggleItem={toggleItem}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <Footer
        numberOfLeftToDo={numberOfLeftToDo}
        clearCompleted={clearCompleted}
        onCategoryChange={onCategoryChange}
        category={category}
      />
    </div>
  );
};

export default ToDoApp;
