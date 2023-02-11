import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import CloseIcon from "@mui/icons-material/Close";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="NavbarHeader">
      <Link to={"/"}>
        <div className="appleLOGO">
          <AppleIcon />
        </div>
      </Link>
      <ul className={click ? "NavbarMenu active" : "NavbarMenu"}>
        <li></li>
        <li>
          <Link to="Store/">Store</Link>
        </li>
        <li>
          <Link to="Mac/">Mac</Link>
        </li>
        <li>
          <Link to="Pad/">iPad</Link>
        </li>
        <li>
          <Link to="IPhone/">iPhone</Link>
        </li>
        <li>
          <Link to="Watch/">Watch</Link>
        </li>
        <li>
          <Link to="AirPods/">AirPods</Link>
        </li>
        <li>
          <Link to="TVnHome/">TV & Home</Link>
        </li>
        <li>
          <Link to="OnlyonAppleore/">Only on Apple</Link>
        </li>
        <li>
          <Link to="Accessories/">Accessories</Link>
        </li>
        <li>
          <Link to="Support/">Support</Link>
        </li>
        <li></li>
      </ul>
      <div className="glass">
        <Link to="Glass/">
          <SearchIcon />
        </Link>
      </div>
      <div className="shoppingBag">
        <Link to="ShoppingBag/">
          <WorkOutlineIcon />
        </Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
}

export default Navbar;
