import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import { Main } from "./components/Main";
function App() {
  return (
    <div className="App">
      1
      <Header />
      <ul>
        <li>
          <Link to="/chart"> Chart</Link>
        </li>
        <li>
          <Link to="/"> Recommend </Link>
        </li>
      </ul>
      <Main />
    </div>
  );
}

export default App;
