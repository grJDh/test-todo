import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// import App from "../../App";

import ToDoApp from "../../ToDoApp/ToDoApp";

describe("ToDo Item", () => {
  const renderApp = () => {
    render(<ToDoApp />);
  };

  test("Clicking on item 'completes' it and vice-versa", () => {
    renderApp();

    const todoList = screen.getAllByRole("listitem");
    expect(todoList).toHaveLength(3);

    const todoItem = todoList[0];
    expect(todoItem).not.toHaveClass("line-through");

    userEvent.click(todoItem);
    expect(todoItem).toHaveClass("line-through");

    userEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("line-through");
  });
});
