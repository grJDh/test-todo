import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDoApp from "../../ToDoApp/ToDoApp";

describe("ToDo Item", () => {
  test("Clicking on item 'completes' it and vice-versa", () => {
    render(<ToDoApp />);

    const todoItem = screen.getByText("Тестовое задание");
    expect(todoItem).not.toHaveClass("before:w-full");

    userEvent.click(todoItem);
    expect(todoItem).toHaveClass("before:w-full");

    userEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("before:w-full");
  });

  test("Clicking on delete button removes item from list", () => {
    render(<ToDoApp />);

    const todoItem = screen.getAllByRole("listitem")[0];
    const deleteButton = within(todoItem).getByRole("button");

    userEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
