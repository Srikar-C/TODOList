import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Input from './Components/Input';
import Introduction from './Components/Introduction';

function App() {
  return (
    <div className="Head">
      <Introduction/>
      <div className="container">
        <Header/>
        <Input/>
      </div>
    </div>
  );
}

export default App;
