import { useRef } from "react";
import { Link } from "react-router";
import "./styles.css";

export default function Dashboard() {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container-dashboard" ref={pageRef}>
      <h1>Em construção...</h1>
      <Link to="/">
        <button>RETORNAR</button>
      </Link>
    </div>
  );
}
