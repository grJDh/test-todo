import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDoApp from "../../ToDoApp/ToDoApp";

describe("Input", () => {
  test("Adding new item", () => {
    render(<ToDoApp />);

    const input = screen.getByRole("textbox");
    userEvent.clear(input);
    userEvent.tab();
    expect(input).toHaveValue("");

    userEvent.type(input, "Проверить тесты");
    userEvent.tab();
    expect(input).toHaveValue("Проверить тесты");

    const addButton = screen.getByRole("button", { name: "+" });
    userEvent.click(addButton);

    expect(
      screen.getAllByRole("listitem").find(listitem => listitem.textContent === "Проверить тесты")
    ).toBeInTheDocument();
  });
});
