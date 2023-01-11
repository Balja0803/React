import { useState } from "react";

export default function WelcomePage(prop) {
  const { setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="">
      <input
        type="text"
        name=""
        id=""
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="text"
        name=""
        id=""
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Login</button>
    </div>
  );
}
