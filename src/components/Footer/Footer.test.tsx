import { render, screen } from "@testing-library/react";
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
});
