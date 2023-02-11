import "./App.css";
import Home from "./Routes/Home";
import Accessories from "./Routes/Accessories";
import AirPods from "./Routes/AirPods";
import Glass from "./Routes/Glass";
import Pad from "./Routes/Pad";
import IPhone from "./Routes/IPhone";
import Mac from "./Routes/Mac";
import OnlyonApple from "./Routes/OnlyonApple";
import ShoppingBag from "./Routes/ShoppingBag";
import Store from "./Routes/Store";
import Support from "./Routes/Support";
import TVnHome from "./Routes/TVnHome";
import Watch from "./Routes/Watch";
import { Route, Routes } from "react-router-dom";
import TechSpecs from "./Routes/TechSpecs";
import BuyButton from "./Routes/BuyButton";
import SwitchingToiPhone from "./Routes/SwitchingToiPhone";
import Overview from "./Routes/Overview";
import Shopiphone from "./Routes/Shopiphone";
import LearnMore from "./Routes/LearnMore";
import Buy from "./Routes/Buy";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="AirPods/" element={<AirPods />} />
        <Route path="Glass/" element={<Glass />} />
        <Route path="Pad/" element={<Pad />} />
        <Route path="IPhone/" element={<IPhone />} />
        <Route path="Mac/" element={<Mac />} />
        <Route path="OnlyonApple/" element={<OnlyonApple />} />
        <Route path="ShoppingBag/" element={<ShoppingBag />} />
        <Route path="Store/" element={<Store />} />
        <Route path="Support/" element={<Support />} />
        <Route path="TVnHome/" element={<TVnHome />} />
        <Route path="Watch/" element={<Watch />} />
        <Route path="iPhone14/" element={<iPhone14 />} />
        <Route path="Overview/" element={<Overview />} />
        <Route path="SwitchingToiPhone /" element={<SwitchingToiPhone />} />
        <Route path="Techspecs/" element={<TechSpecs />} />
        <Route path="Buybutton/" element={<BuyButton />} />
        <Route path="Shopiphone/" element={<Shopiphone />} />
        <Route path="Buy/" element={<Buy />} />
        <Route path="LearnMore/" element={<LearnMore />} />
      </Routes>
    </div>
  );
}

export default App;
