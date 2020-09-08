import React, { useContext } from "react";
import MyContext from "./Context/myContext";

export default function C() {
  const { x, y, setX } = useContext(MyContext);
  return (
    <div>
      <p>C, y = {y}</p>
      <button onClick={() => setX(x + 1)}>Increment X</button>
    </div>
  );
}
