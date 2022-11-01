import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("Clicking on radio button changes category", () => {
    render(<ToDoApp />);

    const radioButtonsList = screen.getAllByTestId("radioLabel");

    userEvent.click(radioButtonsList[1]);

    screen
      .getAllByRole("listitem")
      .forEach(todoItem => expect(within(todoItem).getByText(/[А-я]|[A-z]|[0-9]/i)).not.toHaveClass("line-through"));

    userEvent.click(radioButtonsList[2]);
    screen
      .getAllByRole("listitem")
      .forEach(todoItem => expect(within(todoItem).getByText(/[А-я]|[A-z]|[0-9]/i)).toHaveClass("line-through"));
  });
});
