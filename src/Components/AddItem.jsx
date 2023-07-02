export default function AddItem(props){
    return <div  onClick={()=>{
        props.onChecked(props.id);
    }}>
        <li className="addList">{props.text}</li>
    </div>
}