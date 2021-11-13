import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Inicio}></Route>
        <Route exact path='/home' component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
