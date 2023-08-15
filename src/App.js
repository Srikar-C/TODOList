import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Input from './Components/Input';
import Introduction from './Components/Introduction';
import Nav from "./Components/Nav";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={[<Nav/>]}></Route>
          <Route path='/main' element={[<Nav/>,<Input/>]}></Route>
        </Routes>
      </Router>
      {/* <Introduction/>
      <div className="container">
        <Header/>
        <Input/>
      </div> */}
    </div>
  );
}

export default App;
