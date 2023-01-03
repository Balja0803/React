import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import Body from "./component/Body.js";
import LeftSide from "./component/LeftSide.js";
import RightSide from "./component/RightSide.js";
const name = "Legendary Andy";

let customStyle = {
  color: name.split(" ")[0] == "Legendary" ? "#2ecc71" : "black",
  fontSize: name.split(" ")[0] == "Legendary" ? "56px" : "30px",
};
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
