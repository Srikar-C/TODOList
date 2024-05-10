import './item.css'
export default function Item(props) {
  return (
    <div className="item-list">
      <h3>{props.id}.</h3>
      <h3>{props.val}</h3>
      <button
        onClick={() => {
          props.onChecked(props.id)
        }}
      >
        Delete
      </button>
    </div>
  )
}
