import React, { useState } from "react";
import MyContext from "./myContext";

export default function ContextContainer(props) {
  // +++ USC +++
  const [x, setX] = useState(10);
  const [y, setY] = useState(13);
  return (
    <MyContext.Provider value={{ x, setX, y, setY }}>
      {props.children}
    </MyContext.Provider>
  );
}
