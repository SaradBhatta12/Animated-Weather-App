import React, { useRef } from "react";
import "./App.scss";
import Box from "./Box";

function App() {
  const ref = useRef(null);
  return (
    <main className="main" ref={ref}>
      <h1 className="h1"> weather app</h1>

      <Box area={ref} />
    </main>
  );
}

export default App;
