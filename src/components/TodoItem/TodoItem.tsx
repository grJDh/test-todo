import { BsCheck2 } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

type Props = {
  text: string;
  id: number;
  finished: boolean;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
};

const ToDoItem = ({ text, id, finished, removeItem, toggleItem }: Props) => {
  return (
    <li className={`cursor-pointer flex justify-between border-b h-12 items-center text-xl text-gray-600`}>
      <div
        className="flex justify-center items-center"
        onClick={() => toggleItem(id)}
      >
        <div
          className={`transition-all  border border-gray-300 rounded-full mx-2 w-8 h-8 flex justify-center items-center
        ${finished ? "border-green-200" : ""}`}
        >
          <BsCheck2
            className={`text-green-500 scale-100 transition-all ${finished ? "border-green-200" : "invisible scale-0"}`}
          />
        </div>
        <p className={`${finished ? "line-through text-gray-300" : ""}`}>{text}</p>
      </div>
      <button
        className="h-full w-[5.1rem] border-l border-gray-300 text-2xl hover:text-3xl hover:text-red-500
                 text-gray-300 flex items-center justify-center transition-all active:text-4xl"
        onClick={() => removeItem(id)}
      >
        <MdDeleteOutline />
      </button>
    </li>
  );
};

export default ToDoItem;
