import React from "react";
/*import React from "react";*/
import ReactDOM from "react-dom";
import Game from "./components/Game.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h2>Lets play tic tac toe !! </h2>
      <Game />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
