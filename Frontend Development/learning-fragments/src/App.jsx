import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let foodItems=["Dal","Roti","Vegetables","Milk"]
  return (
    <>
      <ul class="list-group">
        {foodItems.map(items=><li class="list-group-item">{items}</li>)}
      </ul>
    </>
  );
}

export default App;
