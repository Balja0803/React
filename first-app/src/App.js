import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState("");
  const changeToOne = () => {
    setCount("1");
  };
  const getValue = () => {};
  return (
    <div>
      <input value={count} />

      <button onClick={getValue} value="1">
        1
      </button>
      <button onClick={getValue} value="2">
        2
      </button>

      <button onClick={getValue} value="3">
        3
      </button>
      <button onClick={getValue} value="4">
        4
      </button>
      <button onClick={getValue} value="5">
        5
      </button>
      <button onClick={getValue} value="6">
        6
      </button>
      <button onClick={getValue} value="7">
        7
      </button>
      <button onClick={getValue} value="8">
        8
      </button>
      <button onClick={getValue} value="9">
        9
      </button>
    </div>
  );
}

export default App;
