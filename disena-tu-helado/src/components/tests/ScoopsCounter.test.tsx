import { render, screen, fireEvent } from "@testing-library/react";
import ScoopsCounter from "../ScoopsCounter";

describe("ScoopsCounter", () => {
  it("empieza con 1 bola", () => {
    render(<ScoopsCounter />);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it("incrementa al pulsar +", () => {
    render(<ScoopsCounter />);

    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });

  it("decrementa al pulsar -", () => {
    render(<ScoopsCounter />);

    fireEvent.click(screen.getByRole("button", { name: "+1" })); // 2
    fireEvent.click(screen.getByRole("button", { name: "-1" })); // 1

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it("no baja de 1", () => {
    render(<ScoopsCounter />);

    fireEvent.click(screen.getByRole("button", { name: "-1" }));
    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it("no sube de 5", () => {
    render(<ScoopsCounter />);

    const plus = screen.getByRole("button", { name: "+1" });
    for (let i = 0; i < 10; i++) fireEvent.click(plus);

    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
});
