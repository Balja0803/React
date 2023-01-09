import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setinputVal] = useState();
  const getInput = () => {
    console.log("test");
    setTodos([...todos, inputVal]);
  };
  const getValue = (event) => {
    setinputVal(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={getValue}></input>
      <button onClick={getInput}>add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={editVal}>edit</button>
            <button onClick={deleteVal}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
