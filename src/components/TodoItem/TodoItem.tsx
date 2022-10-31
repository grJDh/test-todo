type Props = {
  text: string;
  id: number;
  finished: boolean;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
};

const ToDoItem = ({ text, id, finished, removeItem, toggleItem }: Props) => {
  return (
    <div
      className={`cursor-pointer border-solid border-black border ${finished ? "line-through" : ""}`}
      onClick={() => toggleItem(id)}
    >
      {text}
    </div>
  );
};

export default ToDoItem;
