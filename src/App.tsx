import ToDoApp from "./ToDoApp/ToDoApp";

const App = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center flex-col bg-gray-200">
      <h1 className="flex text-9xl text-[#e9d9d8]">todos</h1>
      <ToDoApp />
    </div>
  );
};

export default App;
