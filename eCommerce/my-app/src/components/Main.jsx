import Navbar from "./subComp/Navbar";
import Products from "./subComp/Products";
import Slider from "./subComp/Slider";
import SpecialOffers from "./subComp/SpecialOffers";

export default function Main() {
  return (
    <div>
      <Slider />
      <Navbar />
      <Products />
      <img src="" alt=""></img>
      <SpecialOffers />
    </div>
  );
}
