import { useState } from "react";
import "./add.css";
import Item from "./Item";

function Add() {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }
  const [date, setDate] = useState(getDate());
  function handleDate(event) {
    setDate(event.target.value);
  }
  const [text, setText] = useState("");
  function handleText(event) {
    setText(event.target.value);
  }
  const [data, setData] = useState([]);
  function handleData(event) {
    event.preventDefault();
    setData((prevData) => {
      return [...prevData, "Text is " + text + " Date is " + date];
    });
    setDate(getDate());
    setText("");
  }
  function onDelete(props) {
    setData((prevData) => {
      return prevData.filter((item, index) => {
        return index !== props;
      });
    });
  }
  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <form className="form">
        <input type="date" onChange={handleDate} value={date} />
        <input
          type="text"
          onChange={handleText}
          value={text}
          placeholder="Enter text"
          style={{ color: "white" }}
        />
        <button onClick={handleData}>Add</button>
      </form>
      <div className="list">
        {data.map((item, index) => (
          <Item id={index} value={item} onChecked={onDelete} />
        ))}
      </div>
    </div>
  );
}
export default Add;
