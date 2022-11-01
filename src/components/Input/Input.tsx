import { useEffect } from "react";

import { SlArrowDown, SlPlus } from "react-icons/sl";

type Props = {
  refProp: React.RefObject<HTMLInputElement>;
  addItem: () => void;
};

const Input = ({ refProp, addItem }: Props) => {
  const onKeydown = (e: KeyboardEvent) => {
    if (document.activeElement === refProp.current && e.key === "Enter") addItem();
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeydown, false);
    return () => window.removeEventListener("keydown", onKeydown, false);
  });

  return (
    <div className="flex border-b-2 border-gray-300 h-12 relative">
      <input
        className="w-full text-base sm:text-xl rounded-tl-xl px-12 placeholder:italic placeholder:text-gray-300 peer/input
                   focus:outline-gray-300"
        type="text"
        ref={refProp}
        placeholder={"What needs to be done?"}
      />
      <SlArrowDown className="nice absolute top-[0.85rem] left-3 text-xl sm:text-2xl  text-gray-300 transition-all peer-focus/input:-rotate-90" />
      <button
        className="lol w-24 rounded-tr-xl border-l border-gray-300 text-2xl hover:text-3xl hover:text-red-200
                 text-gray-300 flex items-center justify-center transition-all active:text-4xl"
        onClick={addItem}
        aria-label="add"
      >
        <SlPlus />
      </button>
    </div>
  );
};

export default Input;
