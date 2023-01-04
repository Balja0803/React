import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Main from "./Main";
import "../style/body.css";
export default function Body() {
  return (
    <div id="body">
      <LeftSide />
      <Main />
      <RightSide />
    </div>
  );
}
