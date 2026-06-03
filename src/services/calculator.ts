import { caixa } from "../data/consumo";

export function handleChange(
  event: React.ChangeEvent<HTMLInputElement>,
  index: number,
): void {
  const value = Number(event.target.value);
  caixa[index].quantidade = value;
}

export function calculateTotal(): number {
  return caixa.reduce((acc, item) => acc + item.valor * item.quantidade, 0);
}

export function handleClick(): void {
  const total = calculateTotal();
  alert(total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
}
