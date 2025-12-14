import { render, screen } from "@testing-library/react";
import IceCreamInfo from "../IceCremInfo";

describe("IceCreamInfo", () => {
  it("muestra el título de la sección", () => {
    render(<IceCreamInfo />);
    expect(screen.getByRole("heading", { name: /¿cómo funciona\?/i })).toBeInTheDocument();
  });

  it("renderiza varias imágenes", () => {
    render(<IceCreamInfo />);

    // coge todas las imágenes del componente
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(1);
  });
});
