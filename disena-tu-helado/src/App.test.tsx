import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("muestra el título principal", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /diseña tu helado/i })).toBeInTheDocument();
  });

  it("muestra el subtítulo", () => {
    render(<App />);
    expect(
      screen.getByText(/crea el helado perfecto/i)
    ).toBeInTheDocument();
  });
});
