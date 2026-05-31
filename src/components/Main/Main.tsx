import { caixa } from "../../data/consumo";
import "./styles.css";

export default function Main() {
  return (
    <div className="container-main">
      {caixa.map((item, index) => (
        <div className="container-values" key={index}>
          <label>
            {item.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </label>
          <input type="number" min={0} max={50}></input>
        </div>
      ))}
    </div>
  );
}
