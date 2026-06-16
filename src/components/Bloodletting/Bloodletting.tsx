import { useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router";
import {
  exportElementAsImage,
  getFormattedDate,
} from "../../utils/exportImage";
import {
  calculateSangria,
  handleClear,
  limitInput,
} from "../../services/calculator";

export default function Bloodletting() {
  const pageRef = useRef<HTMLDivElement>(null);

  const [sangria, setSangria] = useState(0);
  const [atual, setAtual] = useState(0);

  return (
    <div className="container-blood" ref={pageRef}>
      <h1>Sangria de Caixa</h1>

      <label>{getFormattedDate()}</label>

      <div className="container-valuess">
        <div className="field">
          <label>VALOR NO CAIXA</label>
          <input
            className="value-input"
            type="number"
            id="valor-caixa"
            onChange={limitInput}
            placeholder="Ex: 100"
          />
        </div>

        <div className="field">
          <label>VALOR DA SANGRIA</label>
          <input
            className="value-input"
            type="number"
            id="valor-sangria"
            onChange={limitInput}
            placeholder="Ex: 100"
          />
        </div>
      </div>
      <div className="button-row">
        <button
          className="button-calc"
          onClick={() => calculateSangria(setSangria, setAtual)}
        >
          SANGRIA
        </button>
        <button onClick={() => handleClear(setSangria, setAtual)}>
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
        </button>{" "}
        <Link to="/">
          <button>RETORNAR</button>
        </Link>
      </div>

      <div className="field-ff">
        <label className="totalCount">
          Caixa Atual: {""}
          {atual.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </label>
        <label className="totalCount">
          Sangria: {""}
          {sangria.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </label>
      </div>
    </div>
  );
}
