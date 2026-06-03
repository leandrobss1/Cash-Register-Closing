import { caixa } from "../../data/consumo";
import { handleClick, handleChange } from "../../services/calculator";
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

          <input
            className="value-input"
            type="number"
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      ))}

      <button onClick={handleClick}>CALCULAR</button>
    </div>
  );
}
