import { useState } from "react"
import AddItem from "./AddItem";

export default function Input(){

    const [input,setInput] =useState("");
    const [item,setItems] =useState([]);

    function handleChange(event){
        setInput(event.target.value);
    }

    function addItem(){
        setItems((prevItems)=>{
            return [...prevItems,input];
        });
        setInput("");
    }
    function deleteItem(id){
        setItems((prevItems)=>{
            return prevItems.filter((item,index)=>{
                return index!==id
            });
        });
    }

    return (
        <div className="inputadd">
            <input 
            onChange={handleChange} 
            type="text" 
            placeholder="Enter the To Do List" 
            value={input}
            />
            <button onClick={addItem}>Add</button>
            <div>
            <h1 className="ListHead">Your Lists</h1>
                <ul>
                    {item.map((todoitem,index)=>(
                        <AddItem 
                        key={index} 
                        id={index} 
                        text={todoitem} 
                        onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
            <div style={{height:"3vh"}}></div>
        </div>
    )
}