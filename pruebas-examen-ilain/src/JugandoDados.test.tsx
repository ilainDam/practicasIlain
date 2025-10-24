import { render, screen, fireEvent } from "@testing-library/react";
import JugandoDados from "./JugandoDados";

function lanzarDadoVariasVeces(btn: HTMLElement, veces: number) {
  for (let i = 0; i < veces; i++) fireEvent.click(btn);
}

// Diccionario con la puntuación de cada test
const valoresTest: Record<string, number> = {
  "1": 2.5,
  "2": 0.25,
  "3": 0.25,
  "4": 1.0,
  "5": 1.0,
  "6": 2.0, 
  "7": 1.0,
  "8": 1,
  "9": 1,
};

let notaTotal = 0; // acumulador de la calificación total

describe("JugandoDados", () => {
  const sumarPuntos = (indice: string) => {
    notaTotal += valoresTest[indice] || 0;
  };

  test("1. El componente se renderiza sin errores (2.5 pts)", () => {
    render(<JugandoDados />);
    sumarPuntos("1");
  });

  test("2. Existe el botón 'Lanzar dado' (0.25 pt)", () => {
    render(<JugandoDados />);
    const btn = screen.getByTestId("btnLanzarDado");
    expect(btn).toBeInTheDocument();
    sumarPuntos("2");
  });

  test("3. Existe el botón 'Nueva serie' (0.25 pt)", () => {
    render(<JugandoDados />);
    const btn = screen.getByTestId("btnNuevaSerie");
    expect(btn).toBeInTheDocument();
    sumarPuntos("3");
  });

  test("4.clicar en 'Lanzar dado' agrega y muestra una tirada (1pt)", () => {
    render(<JugandoDados />);

    expect(screen.queryByTestId("liEnListaTiradas")).toBeNull();

    const btn = screen.getByTestId("btnLanzarDado");
    fireEvent.click(btn);

    const elementosTiradas = screen.getAllByTestId("liEnListaTiradas");
    expect(elementosTiradas.length).toBeGreaterThan(0);

    const valor = Number(elementosTiradas[0].textContent);
    expect(valor).toBeGreaterThanOrEqual(1);
    expect(valor).toBeLessThanOrEqual(6);

    sumarPuntos("4");
  });

  test("5. La puntuación aumenta con varias tiradas y coincide suma de tiradas (1 pt)", () => {
    render(<JugandoDados />);
    const btn = screen.getByTestId("btnLanzarDado");

    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    const elementosTiradas = screen.getAllByTestId("liEnListaTiradas");
    expect(elementosTiradas.length).toBeGreaterThanOrEqual(3);

    const sumaTiradas = elementosTiradas
      .map(el => Number(el.textContent))
      .reduce((a, b) => a + b, 0);

    const puntuacionActual = Number(screen.getByTestId("puntuacionActual").textContent);
    expect(sumaTiradas).toBe(puntuacionActual);
    expect(puntuacionActual).toBeGreaterThanOrEqual(3);
    expect(puntuacionActual).toBeLessThanOrEqual(18);

    sumarPuntos("5");
  });

  test("6. Mensaje final no aparece al inicio y aparece al alcanzar 25 puntos exactos (2 pts)", () => {
    render(<JugandoDados />);
    const mensaje = screen.getByTestId("mensajeFinal");
    expect(mensaje.textContent).toBe("");

    const btn = screen.getByTestId("btnLanzarDado");
    // Simulamos valores controlados para alcanzar exactamente 25 puntos
    for (let i = 0; i < 5; i++) {
      jest.spyOn(Math, "random").mockReturnValue(0.8); // dado=6
      fireEvent.click(btn);
    }
    jest.spyOn(Math, "random").mockReturnValue(0.1666); // dado=2
    fireEvent.click(btn);

    expect(Number(screen.getByTestId("puntuacionActual").textContent)).toBe(25);
    expect(mensaje.textContent).toMatch(/ganado/i);

    sumarPuntos("6");
  });

  test("7. Al superar 25 puntos muestra mensaje de derrota (1pts)", () => {
    render(<JugandoDados />);
    const mensaje = screen.getByTestId("mensajeFinal");
    const btn = screen.getByTestId("btnLanzarDado");

    jest.spyOn(Math, "random").mockReturnValue(0.9); // dado=6
    lanzarDadoVariasVeces(btn, 5);
    expect(mensaje.textContent).toMatch(/perdido|superaste/i);

    sumarPuntos("7");
  });

  test("8. Al pulsar 'Nueva serie' se añade la puntuación actual  la lista acumulada (1 pt)", () => {
    render(<JugandoDados />);

    const btnLanzar = screen.getByTestId("btnLanzarDado");
    
    const btnNuevaSerie = screen.getByTestId("btnNuevaSerie");

    // Realizamos unas tiradas para tener puntuación acumulada
    fireEvent.click(btnLanzar);
    fireEvent.click(btnLanzar);


     const puntuacionGuardada = Number(screen.getByTestId("puntuacionActual").textContent);
    // Guardamos la puntuación a la lista de series
    fireEvent.click(btnNuevaSerie);

    // Obtenemos los elementos que muestran las puntuaciones acumuladas
    const elementosSeries = screen.getAllByTestId("datoEnListaPuntuacionesAcumuladas");
    expect(elementosSeries.length).toBeGreaterThanOrEqual(1);

    // Verificamos que alguna de las puntuaciones acumuladas coincide con la puntuación guardada
    const puntuaciones = elementosSeries.map(el => {
      const texto = el.textContent || "";
      const match = texto.match(/Serie \d+: (\d+)/);
      return match ? Number(match[1]) : null;
    });

    expect(puntuaciones).toContain(puntuacionGuardada);

    sumarPuntos("9");
  });

  test("9. En la tercera serie el botón 'Nueva serie' muestra 'finalizar' (1 pts)", () => {
    render(<JugandoDados />);
    const btnNuevaSerie = screen.getByTestId("btnNuevaSerie");
    for (let i = 0; i < 2; i++) fireEvent.click(btnNuevaSerie);
    expect(btnNuevaSerie.textContent?.toLowerCase()).toMatch(/finalizar/);

    sumarPuntos("8");
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(() => {
  const notaFinal = Math.min(notaTotal, 10);
  console.log("=======================================");
  console.log("🧾  Resultado final del alumno: ", notaFinal.toFixed(1), "puntos sobre 10");
  console.log("=======================================");
});
