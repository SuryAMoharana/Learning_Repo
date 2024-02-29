import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import AddTodo2 from "./Components/AddTodo2";
import AddTodo3 from "./Components/AddTodo3";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items">
        <AddTodo2 />
        <AddTodo3></AddTodo3>
      </div>
    </center>
  );
}

export default App;
