import { Link } from "react-router-dom";
import "./anima.css";
export default function Anima() {
  return (
    <Link to="/info" className="text">
      <h2>TO DO List</h2>
      <p>Click any where to get started with the application.</p>
    </Link>
  );
}
