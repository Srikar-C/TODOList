import { useState } from "react";
import "./item.css";
export default function Item(props) {
  const [newval,setNewVal] = useState(props.value);
  const [toggle,setToggle] = useState(false);
  function handleUpdate(){
    var val=prompt("Enter new value");
    let str = props.value;
    let s = str.split(" => ");
    s[2] = val;
    setNewVal(s[0]+" => "+s[1]+" => "+s[2]);
    // set
    
    // setToggle(!toggle);
  }
  const [val,setValue] = useState(props.value);
  return (
    <div className="item-list">
      <h3>{props.id}.</h3>
      <h3>{props.val}</h3>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        Delete
      </button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
