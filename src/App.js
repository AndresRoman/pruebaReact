import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";
import "./App.css";

function App() {
  // const [stateCar, setStateCar] = useState(true);
  // const [contar, setContar] = useState(0);

  // useEffect(() => {
  //   console.log("Total de clicks: ", contar);
  // }, [contar]);

  // const encenderApagar = () => {
  //   setStateCar((prevValue) => !prevValue);
  //   setContar(contar + 1);
  // };

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <div>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>
          <Link to="/quien-soy">
            <Button>QuienSoy</Button>
          </Link>
        </div>
        <Routes>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/quien-soy">
            <QuienSoy />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
