import { useState } from "react";

export default function Players() {
  const [score, setScore] = useState("0");
  function handleClick() {
    setScore(score--);
  }
  function increment() {
    setScore(score++);
  }
  return (
    <tbody>
      <tr>
        <td>
          <td></td>
          <td></td>
          <td>
            <button className="btn btn-danger" onClick={handleClick}>
              -
            </button>
            {score}
            <button className="btn btn-success" onClick={increment}>
              +
            </button>
          </td>
        </td>
      </tr>
    </tbody>
  );
}
