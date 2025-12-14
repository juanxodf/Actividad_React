import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import IceCreamBuilder from "../IceCreamBuilder";

// Mock sencillo de DataTransfer para JSDOM (drag & drop)
function createDataTransfer() {
  const store: Record<string, string> = {};

  return {
    setData: (type: string, value: string) => {
      store[type] = value;
    },
    getData: (type: string) => store[type],
    clearData: (type?: string) => {
      if (type) delete store[type];
      else Object.keys(store).forEach((k) => delete store[k]);
    },
    dropEffect: "move",
    effectAllowed: "all",
    files: [],
    items: [],
    types: [],
  } as unknown as DataTransfer;
}

describe("IceCreamBuilder", () => {
  it("renderiza sabores disponibles y la zona de drop", () => {
    render(<IceCreamBuilder />);

    expect(screen.getByRole("heading", { name: /sabores disponibles/i })).toBeInTheDocument();
    expect(screen.getByTestId("drop-zone")).toBeInTheDocument();
  });

  it("muestra el texto inicial cuando no hay sabores seleccionados", () => {
    render(<IceCreamBuilder />);
    expect(screen.getByText(/suelta aquí tus bolas de helado/i)).toBeInTheDocument();
  });

  it("permite arrastrar y soltar un sabor en el cucurucho", () => {
    render(<IceCreamBuilder />);

    const dropZone = screen.getByTestId("drop-zone");
    const strawberryItem = screen.getByText(/🍓\s*fresa/i);

    const dataTransfer = createDataTransfer();

    fireEvent.dragStart(strawberryItem, { dataTransfer });
    fireEvent.dragOver(dropZone, { dataTransfer });
    fireEvent.drop(dropZone, { dataTransfer });

    // Tras soltar, debe aparecer el sabor dentro del cucurucho
    expect(screen.getByText(/🍓\s*fresa/i)).toBeInTheDocument();

    // Y el texto inicial ya no debería estar
    expect(screen.queryByText(/suelta aquí tus bolas de helado/i)).not.toBeInTheDocument();
  });

  it("reinicia el helado al pulsar el botón", () => {
    render(<IceCreamBuilder />);

    const dropZone = screen.getByTestId("drop-zone");
    const strawberryItem = screen.getByText(/🍓\s*fresa/i);
    const dataTransfer = createDataTransfer();

    fireEvent.dragStart(strawberryItem, { dataTransfer });
    fireEvent.dragOver(dropZone, { dataTransfer });
    fireEvent.drop(dropZone, { dataTransfer });

    // Reiniciar
    const resetButton = screen.getByRole("button", { name: /reiniciar helado/i });
    fireEvent.click(resetButton);

    // Vuelve el texto inicial
    expect(screen.getByText(/suelta aquí tus bolas de helado/i)).toBeInTheDocument();
  });
});
