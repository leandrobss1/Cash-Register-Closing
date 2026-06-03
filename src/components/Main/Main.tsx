import { useState } from "react";
import { caixa } from "../../data/consumo";
import {
  handleClick,
  handleChange,
  handleClear,
} from "../../services/calculator";
import "./styles.css";

export default function Main() {
  const [total, setTotal] = useState(0);
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

      <button className="button-calc" onClick={() => handleClick(setTotal)}>
        CALCULAR
      </button>
      <button className="trigger-button" onClick={() => handleClear(setTotal)}>
        REFAZER
      </button>

      <p className="totalCount">
        Total: {""}
        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
}
