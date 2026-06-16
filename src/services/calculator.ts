import { caixa } from "../data/consumo";

export function handleChange(
  event: React.ChangeEvent<HTMLInputElement>,
  index: number,
): void {
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0, 2);
    return;
  }

  const value = Number(event.target.value);
  caixa[index].quantidade = value;
}

export function calculateTotal(): number {
  return caixa.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
}

export function handleClick(setTotal: (value: number) => void): void {
  const total = calculateTotal();
  setTotal(total);
}

export function handleClear(
  setTotal: (value: number) => void,
  setAtual: (value: number) => void,
): void {
  const inputs = document.querySelectorAll(".value-input");

  inputs.forEach((input, index) => {
    (input as HTMLInputElement).value = "";
    caixa[index].quantidade = 0;
  });

  setTotal(0);
  setAtual(0);
}

export function calculateSangria(
  setSangria: (value: number) => void,
  setAtual: (value: number) => void,
): void {
  const valueCaixa = Number(
    (document.getElementById("valor-caixa") as HTMLInputElement).value,
  );
  const valueSangria = Number(
    (document.getElementById("valor-sangria") as HTMLInputElement).value,
  );

  const resultSangria = valueCaixa - valueSangria;

  setSangria(valueSangria);
  setAtual(resultSangria);
}

export function limitInput(e: React.ChangeEvent<HTMLInputElement>): void {
  if (e.target.value.length > 4) e.target.value = e.target.value.slice(0, 4);
}
