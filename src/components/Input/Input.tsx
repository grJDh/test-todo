import { useEffect } from "react";

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
    <div className="flex border-b-2 border-gray-300 h-12">
      <input
        className="w-full text-xl rounded-tl-xl px-10 placeholder:italic placeholder:text-gray-300"
        type="text"
        ref={refProp}
        placeholder={"What needs to be done?"}
      />
      <button
        className="w-36 bg-gray-300 rounded-tr-xl hover:bg-gray-400 active:bg-gray-500 text-5xl flex items-center justify-center"
        onClick={addItem}
      >
        +
      </button>
    </div>
  );
};

export default Input;
