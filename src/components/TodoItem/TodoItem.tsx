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
      className={`cursor-pointer flex justify-between border-b h-12 items-center pl-10 text-xl text-gray-600`}
      onClick={() => toggleItem(id)}
    >
      <p className={`${finished ? "line-through text-gray-300" : ""}`}>{text}</p>
      <button
        className="bg-red-200 h-full w-28 hover:bg-red-300 active:bg-red-400"
        onClick={() => removeItem(id)}
      >
        ❌
      </button>
    </li>
  );
};

export default ToDoItem;
