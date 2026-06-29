import { Link } from "react-router";
import "./styles.css";

export default function Home() {
  return (
    <div className="container-home">
      <h1 className="title-home">O que deseja fazer hoje?</h1>
      <Link to="/fechamento-caixa">
        <button>Fechamento de Caixa</button>
      </Link>
      <Link to="/sangria-de-caixa">
        <button>Sangria de Caixa</button>
      </Link>
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  );
}
