import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { forEachChild } from "typescript";

import ToDoApp from "../../ToDoApp/ToDoApp";

describe("Radio Button", () => {
  test("Clicking on radio button gives it border", () => {
    render(<ToDoApp />);

    const radioButtonsList = screen.getAllByTestId("radioLabel");
    expect(radioButtonsList).toHaveLength(3);

    expect(radioButtonsList[0]).toHaveClass("border");
    expect(radioButtonsList[1]).not.toHaveClass("border");
    expect(radioButtonsList[2]).not.toHaveClass("border");

    userEvent.click(radioButtonsList[1]);
    expect(radioButtonsList[0]).not.toHaveClass("border");
    expect(radioButtonsList[1]).toHaveClass("border");
    expect(radioButtonsList[2]).not.toHaveClass("border");

    userEvent.click(radioButtonsList[2]);
    expect(radioButtonsList[0]).not.toHaveClass("border");
    expect(radioButtonsList[1]).not.toHaveClass("border");
    expect(radioButtonsList[2]).toHaveClass("border");
  });

  test("Clicking on radio button changes catregory", () => {
    render(<ToDoApp />);

    const radioButtonsList = screen.getAllByTestId("radioLabel");

    userEvent.click(radioButtonsList[1]);

    screen.getAllByTestId("todoItemText").forEach(todoItem => expect(todoItem).not.toHaveClass("line-through"));

    userEvent.click(radioButtonsList[2]);
    screen.getAllByTestId("todoItemText").forEach(todoItem => expect(todoItem).toHaveClass("line-through"));
  });
});
