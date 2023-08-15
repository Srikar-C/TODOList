import "./AddItem.css";

export default function AddItem(props){
    return <div className="adding" >
        <li className="addList">{props.text}</li>
        <button onClick={()=>{
            props.onChecked(props.id);
        }}>Delete</button>
    </div>
}