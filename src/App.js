import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => prev + 1);
  };
  const take = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Yuki's Practice React for git</p>
        <div className="counter">
          <p>{count}</p>
          <button onClick={take}> - </button>
          <button onClick={add}> + </button>
        </div>
      </header>
    </div>
  );
}

export default App;
