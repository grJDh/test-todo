type Props = {
  text: string;
  id: number;
  finished: boolean;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
};

const ToDoItem = ({ text, id, finished, removeItem, toggleItem }: Props) => {
  return (
    <li
      className={`cursor-pointer border-solid border-black border flex justify-between`}
      onClick={() => toggleItem(id)}
    >
      <p className={`${finished ? "line-through" : ""}`}>{text}</p>
      <button onClick={() => removeItem(id)}>D</button>
    </li>
  );
};

export default ToDoItem;
