import RadioButton from "../RadioButton/RadioButton";

type Props = {
  numberOfLeftToDo: number;
  clearCompleted: () => void;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
};

const Footer = ({ numberOfLeftToDo, clearCompleted, onCategoryChange, category }: Props) => {
  return (
    <div className="flex border-solid border-black border h-8 justify-between items-center">
      <p>{numberOfLeftToDo} items left</p>
      <div className="flex justify-between items-center">
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
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default Footer;
