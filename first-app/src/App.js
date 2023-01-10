import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState("");
  const getValue = (e) => {
    setCount(count + e.target.value);
  };
  const backSpace = () => {
    try {
      setCount(count.slice(0, -1));
    } catch (error) {
      setCount("");
    }
  };
  const calculate = () => {
    try {
      setCount(eval(count));
    } catch (error) {}
  };
  return (
    <div className="App">
      <input value={count} />
      <div>
        <button onClick={getValue} value="%">
          %
        </button>
        <button onClick={backSpace} value="C">
          C
        </button>

        <button onClick={getValue} value="-">
          -
        </button>
      </div>
      <div>
        <button onClick={getValue} value="7">
          7
        </button>
        <button onClick={getValue} value="8">
          8
        </button>

        <button onClick={getValue} value="9">
          9
        </button>
        <button onClick={getValue} value="÷">
          ÷
        </button>
      </div>
      <div>
        <button onClick={getValue} value="4">
          4
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="*">
          x
        </button>
      </div>
      <div>
        <button onClick={getValue} value="1">
          1
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>
        <button onClick={getValue} value="+">
          +
        </button>
      </div>
      <div>
        <button onClick={getValue} value="0">
          0
        </button>
        <button onClick={getValue} value=".">
          .
        </button>
        <button onClick={calculate} value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
