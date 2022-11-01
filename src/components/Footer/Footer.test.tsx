import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDoApp from "../../ToDoApp/ToDoApp";

describe("Footer", () => {
  test("Clicking on item changes 'items left' field", () => {
    render(<ToDoApp />);

    const itemsLeftField = screen.getByText(/items left/i);
    expect(itemsLeftField).toHaveTextContent(/2/i);

    const todoList = screen.getAllByRole("listitem");
    userEvent.click(todoList[0]);
    expect(itemsLeftField).toHaveTextContent(/1/i);

    userEvent.click(todoList[2]);
    expect(itemsLeftField).toHaveTextContent(/0/i);
  });

  test("Clicking on 'Clear completed' button deletes all completed items", () => {
    render(<ToDoApp />);

    const clearButton = screen.getByRole("button", { name: /Clear completed/i });

    const completedItem = within(screen.getAllByRole("listitem")[1]).getByText(/[А-я]|[A-z]|[0-9]/i);
    expect(completedItem).toHaveClass("line-through");

    userEvent.click(clearButton);
    expect(completedItem).not.toBeInTheDocument();
    screen
      .getAllByRole("listitem")
      .forEach(todoItem => expect(within(todoItem).getByText(/[А-я]|[A-z]|[0-9]/i)).not.toHaveClass("line-through"));
  });
});
