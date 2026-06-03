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

export function handleClear(setTotal: (value: number) => void): void {
  const inputs = document.querySelectorAll(".value-input");

  inputs.forEach((input, index) => {
    (input as HTMLInputElement).value = "";
    caixa[index].quantidade = 0;
  });

  setTotal(0);
}
