import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  const renderApp = () => {
    render(<App />);
  };

  test("App is loading", () => {
    renderApp();
  });
});
