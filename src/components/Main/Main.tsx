import { useState } from "react";
import { caixa } from "../../data/consumo";
import {
  handleClick,
  handleChange,
  handleClear,
} from "../../services/calculator";
import "./styles.css";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Main() {
  const pageRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (!pageRef.current) return;

    const canvas = await html2canvas(pageRef.current, {
      scale: 2,
      windowWidth: 794,
    });
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `fechamento-${new Date().toLocaleDateString("pt-BR")}.png`;
    link.click();
  }

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
        <button onClick={handleDownload}>SALVAR</button>
      </div>
      <p className="totalCount">
        Total: {""}
        {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
}
