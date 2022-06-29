import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(true);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total de clicks: ", contar);
  }, [contar]);

  const encenderApagar = () => {
    setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>El coche está: {stateCar ? "Encendido" : "Apagado"} </h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={encenderApagar}>Encender-Apagar</button>
      </header>
    </div>
  );
}

export default App;
