import "./App.css";

import { useState } from "react";

import Profile from "./components/LoginLogout/Profile";
import WelcomePage from "./components/LoginLogout/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(userName, password) {
    console.log("loginHandler is running");
    console.log("username: ", userName);
    console.log("password: ", password);

    if (userName === "andy" && password === "asd") {
      setIsLoggedIn(true);
    } else {
      console.error("Wrong password or username");
    }
  }
  return (
    <div className="">
      <div className="App">
        {isLoggedIn ? <Profile /> : <WelcomePage setLogin={loginHandler} />}
      </div>
    </div>
  );
}
export default App;
