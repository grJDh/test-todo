import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDoApp from "../../ToDoApp/ToDoApp";

describe("Input", () => {
  const startToDoApp = () => {
    render(<ToDoApp />);

    const inputElement = screen.getByRole("textbox");
    userEvent.clear(inputElement);
    expect(inputElement).toHaveValue("");

    return inputElement;
  };

  test("Adding new item", () => {
    const inputElement = startToDoApp();

    userEvent.type(inputElement, "Проверить тесты");
    expect(inputElement).toHaveValue("Проверить тесты");

    const addButton = screen.getByRole("button", { name: "add" });
    userEvent.click(addButton);

    expect(screen.getByText("Проверить тесты")).toBeInTheDocument();

    expect(inputElement).toHaveValue("");
  });

  test("Adding new item with Enter key", () => {
    const inputElement = startToDoApp();

    userEvent.type(inputElement, "Проверить тесты");
    expect(inputElement).toHaveValue("Проверить тесты");

    userEvent.keyboard("[Enter]");

    expect(screen.getByText("Проверить тесты")).toBeInTheDocument();

    expect(inputElement).toHaveValue("");
  });

  test("If input is empty, no item is added", () => {
    startToDoApp();

    const todoList = screen.getAllByRole("listitem");
    expect(todoList).toHaveLength(3);

    const addButton = screen.getByRole("button", { name: "add" });
    userEvent.click(addButton);

    expect(todoList).toHaveLength(3);
  });
});
