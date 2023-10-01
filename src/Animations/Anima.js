import { Link } from "react-router-dom";
import "./anima.css";
export default function Anima() {
  return (
    //<div onClick={handle} className={bool ? "content" : "zoom"}>
    <Link to="/main" className="text">
      <h2>TO DO List</h2>
    </Link>
    //</div>
  );
}
