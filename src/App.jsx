import React from "react";
import ContextContainer from "./Context/ContextContainer";

// +++ imported Components +++
import B from "./B";
import C from "./C";

export default function App() {
  return (
    <ContextContainer>
      <B />
      <C />
    </ContextContainer>
  );
}
