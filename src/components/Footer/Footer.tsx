import "./styles.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <label className="footer-date">
        © {new Date().getFullYear()} Leandro Borges — Todos os direitos
        reservados.
      </label>
    </div>
  );
}
