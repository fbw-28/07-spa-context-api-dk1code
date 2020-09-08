import React, { useContext } from "react";
import MyContext from "./Context/myContext"
import ContextContainer from "./Context/ContextContainer";

export default function App() {
  const { x, setX, y, setY } = useContext(MyContext);
  return (
    <ContextContainer>
      <div>
        <p>B, x = {x}</p>
        <button>Increment X</button>
      </div>
      <div>
        <p>C, y = {y}</p>
        <button>Increment Y</button>
      </div>
    </ContextContainer>
  );
}
