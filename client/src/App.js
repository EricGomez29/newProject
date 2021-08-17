import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Inicio}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
