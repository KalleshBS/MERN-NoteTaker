import { useState } from "react";
import "./App.css";
import Croutes from "./routers/Croutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Croutes />
    </>
  );
}

export default App;
