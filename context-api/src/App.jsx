import React from "react";
import ContextContainer from "./Context/ContextContainer";

export default function App() {
  return (
    <div>
      <ContextContainer>
        <A />
        <B />
      </ContextContainer>
    </div>
  );
}
