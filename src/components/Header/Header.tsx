import "./styles.css";

export default function Main() {
  const formattedDate = new Date().toLocaleDateString("pt-BR");

  return (
    <div className="container-header">
      <h1>Fechamento de Caixa</h1>
      <label>{formattedDate}</label>
    </div>
  );
}
