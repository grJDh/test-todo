type Props = {
  refProp: React.Ref<HTMLInputElement>;
  onClick: () => void;
};

const Input = ({ refProp, onClick }: Props) => {
  return (
    <div className="flex border-solid border-black border h-8">
      <input
        className="w-full"
        type="text"
        ref={refProp}
      />
      <button
        className="w-10"
        onClick={onClick}
      >
        +
      </button>
    </div>
  );
};

export default Input;
