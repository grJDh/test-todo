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
    <div className="flex border-solid border-black border h-8">
      <input
        className="w-full"
        type="text"
        ref={refProp}
      />
      <button
        className="w-10"
        onClick={addItem}
      >
        +
      </button>
    </div>
  );
};

export default Input;
