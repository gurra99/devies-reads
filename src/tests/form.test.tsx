import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../pages/sign-in/sign-in";

test("Email number input field should be in the component", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>,
  );

  const nameInput = screen.getByRole("textbox", {
    name: /formEmail/i,
  });
  expect(nameInput).toBeInTheDocument();
});

test("Button renders with the correct text", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>,
  );

  const buttonElement = screen.getByText(/submit/i);
  expect(buttonElement).toBeInTheDocument();
});

test("Check if the button is in the document", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>,
  );

  const buttonElement = screen.getByRole("button", { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
});
