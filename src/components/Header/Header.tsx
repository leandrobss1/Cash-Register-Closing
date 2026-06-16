import { getFormattedDate } from "../../utils/exportImage";
import "./styles.css";

export default function Main() {
  return (
    <div className="container-header">
      <h1>Fechamento de Caixa</h1>
      <label>{getFormattedDate()}</label>
    </div>
  );
}
