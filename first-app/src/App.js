import logo from "./logo.svg";
import "./App.css";

const name = "Legendary Andy";

let customStyle = {
  color: name.split(" ")[0] == "Legendary" ? "#2ecc71" : "black",
  fontSize: name.split(" ")[0] == "Legendary" ? "56px" : "30px",
};
function App() {
  return (
    <div className="App">
      <h1 style={customStyle}>Hello {name}</h1>
    </div>
  );
}

export default App;
