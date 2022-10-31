type Props = {
  numberOfLeftToDo: number;
  clearCompleted: () => void;
};

const Footer = ({ numberOfLeftToDo, clearCompleted }: Props) => {
  return (
    <div className="flex border-solid border-black border h-8 justify-between">
      <p>{numberOfLeftToDo} items left</p>
      {/* переключение между активными/всеми/завершенными */}
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default Footer;
