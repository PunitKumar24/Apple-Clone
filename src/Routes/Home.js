import React from "react";
import Navbar from "../Components/Navbar";

import NavbarThree from "../Components/NavbarThree";
import "./HomeStyles.css";
import Homepageposts from "./Homepageposts";
function Home() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  //};
  return (
    <div>
      <div className="sticky-navbartwo ">
        <Navbar />
      </div>
      {/* <NavbarTwo /> */}

      <NavbarThree />
      <Homepageposts />
    </div>
  );
}

export default Home;
