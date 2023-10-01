import "./body.css";
export default function Body() {
  return (
    <div className="menu">
      <h1 className="menu-left">TO DO LIST</h1>
      <div className="menu-right">
        <h2>Rules</h2>
        <ul>
          <li>To get started click on Add Items</li>
          <li>There you can add your Items at any instant of time</li>
          <li>To view all your add Items click on List</li>
          <li>
            There you can find the list of items you have add , here you can
            even delete the unwanted Items at any instant of time
          </li>
        </ul>
      </div>
    </div>
  );
}
