import Add from "./Addiing/Add";
import Anima from "./Animations/Anima";
import Body from "./Body/Body";
import Nav from "./Navigation/Nav";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Anima />]}></Route>
        <Route path="/info" element={[<Nav />, <Body />]}></Route>
        <Route path="/adding" element={[<Nav />, <Add />]}></Route>
      </Routes>
    </Router>
  );
}
