import Header from "./components/Header";
import "./App.css";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";
import Players from "./components/Players";

function App() {
  const [users, setUsers] = useState();
  function test(name, score) {
    console.log(name);
    console.log(score);
  }
  return (
    <div className="bg-primary container">
      <AddPlayer test={test} />
      <table className="table-primary">
        <thead>
          <tr className="">
            <th>total players:</th>
            <th className="btn btn-warning">by Name</th>
            <th className="btn btn-danger">by Score</th>
          </tr>
          <Players props={props} />
        </thead>
      </table>
    </div>
  );
}

export default App;
