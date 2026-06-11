import { useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router";
import { handleClear } from "../../services/calculator";
import { exportElementAsImage } from "../../utils/exportImage";

export default function Bloodletting() {
  const pageRef = useRef<HTMLDivElement>(null);

  const [sangria, setSangria] = useState(0);

  return (
    <div className="container-blood" ref={pageRef}>
      <h1>Sangria de Caixa</h1>

      <div className="container-valuess">
        <div className="field">
          <label>VALOR NO CAIXA</label>
          <input className="value-input" type="number" />
        </div>

        <div className="field">
          <label>VALOR DA SANGRIA</label>
          <input className="value-input" type="number" />
        </div>
      </div>
      <p className="totalCount">
        Total Sangria: {""}
        {sangria.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div className="button-row">
        <button className="button-calc">SANGRIA</button>
        <button onClick={() => handleClear(setSangria)}>LIMPAR</button>
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
    </div>
  );
}
