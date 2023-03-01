import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders WikIdeas", () => {
  render(<App />);
  const linkElement = screen.getByText(/WikIdeas/i);
  expect(linkElement).toBeInTheDocument();
});
