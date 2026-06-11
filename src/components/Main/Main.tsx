import { useRef, useState } from "react";
import { caixa } from "../../data/consumo";
import {
  handleClick,
  handleChange,
  handleClear,
} from "../../services/calculator";
import "./styles.css";
import { Link } from "react-router";
import { exportElementAsImage } from "../../utils/exportImage";

export default function Main() {
  const pageRef = useRef<HTMLDivElement>(null);

  const [total, setTotal] = useState(0);
  return (
    <div className="container-main" ref={pageRef}>
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

      <div className="button-row">
        <button className="button-calc" onClick={() => handleClick(setTotal)}>
          CALCULAR
        </button>
        <button
          className="trigger-button"
          onClick={() => handleClear(setTotal)}
        >
          LIMPAR
        </button>
        <button
          onClick={() => {
            if (!pageRef.current) return;

            exportElementAsImage(
              pageRef.current,
              `fechamento-${new Date().toLocaleDateString("pt-BR")}.png`,
            );
          }}
        >
          SALVAR
        </button>
        <Link to="/">
          <button>RETORNAR</button>
        </Link>
      </div>
      <p className="totalCount">
        Total: {""}
        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
}
