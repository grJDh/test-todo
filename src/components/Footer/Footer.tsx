import RadioButton from "../RadioButton/RadioButton";

type Props = {
  numberOfLeftToDo: number;
  clearCompleted: () => void;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
};

const Footer = ({ numberOfLeftToDo, clearCompleted, onCategoryChange, category }: Props) => {
  return (
    <div
      className="flex h-12 border-t border-gray-400 justify-between items-center
                 px-4 box-border absolute bottom-0 w-full bg-white text-gray-500 rounded-b-lg"
    >
      <p className="w-1/4">{numberOfLeftToDo} items left</p>
      <div className="flex justify-between items-center box-border w-2/5">
        <RadioButton
          name={"category"}
          value={"All"}
          onChange={onCategoryChange}
          category={category}
        />
        <RadioButton
          name={"category"}
          value={"Active"}
          onChange={onCategoryChange}
          category={category}
        />
        <RadioButton
          name={"category"}
          value={"Completed"}
          onChange={onCategoryChange}
          category={category}
        />
      </div>
      <button
        className="hover:underline hover:text-gray-800 w-1/4 text-end"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
