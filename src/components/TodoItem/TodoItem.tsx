type Props = {
  text: string;
  id: number;
  removeItem: (id: number) => void;
};

const ToDoItem = ({ text, id, removeItem }: Props) => {
  return (
    <div
      className="cursor-pointer border-solid border-black border"
      onClick={() => removeItem(id)}
    >
      {text}
    </div>
  );
};

export default ToDoItem;
