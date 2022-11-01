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
    <li
      className="cursor-pointer flex justify-between h-12 items-center text-base sm:text-xl text-gray-600 border flex-row-reverse"
      onClick={() => toggleItem(id)}
    >
      <button
        className="bg-white h-full w-[5.75rem] border-l border-gray-300 text-2xl hover:text-3xl hover:text-red-500
                 text-gray-300 flex items-center justify-center transition-all active:text-4xl peer hover:bg-red-50"
        onClick={() => removeItem(id)}
      >
        <MdDeleteOutline />
      </button>
      <div
        className={`flex justify-start items-center w-full h-full transition-all peer-hover:bg-red-50 group hover:bg-gray-100`}
      >
        <div
          className={`transition-all border border-gray-300 rounded-full mx-2 w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center
                       ${finished ? "border-green-200" : ""}`}
        >
          <BsCheck2
            className={` transition-all duration-300
            ${
              finished ? "text-green-500 border-green-200 scale-100" : "text-gray-500 scale-0 group-hover:scale-[65%]"
            }`}
          />
        </div>
        <p
          className={`relative before:absolute before:top-[55%] before:left-0 before:h-[2px]
                      transition-all duration-200 before:duration-200
                      ${
                        finished
                          ? "before:w-full text-gray-300 before:bg-gray-300"
                          : "before:w-0 text-gray-600 before:bg-gray-600"
                      }`}
        >
          {text}
        </p>
      </div>
    </li>
  );
};

export default ToDoItem;
