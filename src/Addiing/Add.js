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
  const [time,setTime] = useState((new Date).getHours()+":"+(new Date()).getMinutes());
  const [date, setDate] = useState(getDate());
  
  function handleDate(event) {
    setDate(event.target.value);
  }
  const [text, setText] = useState("");
  function handleText(event) {
    setText(event.target.value);
  }
  const [data, setData] = useState([]);
  const [dupData,setDupdata] = useState([]);
  function handleData(event) {
    event.preventDefault();
    setData((prevData) => {
      if(text===""){
        return [...prevData,date+" => " + time+ " => Nothing to do."];
      }
      else {
        return [...prevData,date+" => " + time+ " => "+text];
      }  
    });
    setDupData((prevData) => {
      if(text===""){
        return [...prevData,date+" => " + time+ " => Nothing to do."];
      }
      else {
        return [...prevData,date+" => " + time+ " => "+text];
      }  
    });
    setDate(getDate());
    setText("");
  }
  function onDelete(id) {
    console.log(id);
    setData((prevData)=>{
      return prevData.filter((item, key) => {
        console.log("loop: "+key+":"+item);
        return index !== id;
      });
    });
  }
  function handleTime(event){
    setTime(event.target.value);
  }
  
  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <form className="form">
        <input type="date" onChange={handleDate} value={date} />
        <input type="time" onChange={handleTime} value={time}/>
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
          <Item key={index} id={index} value={item} onChecked={onDelete} />
        ))}
      </div>
    </div>
  );
}
export default Add;
