import React from "react";
import { Link } from "react-router-dom";
import "./NavbarTwoStyles.css";

function Navbar() {
  return (
    <div className="NavbarTwoHeader">
      <Link to={"iPhone14/"}>
        <h1>iPhone 14</h1>
      </Link>
      <ul>
        <li>
          <Link to="Overview/">Overview</Link>
        </li>
        <li>
          <Link to="SwitchingToiPhone/">Switching to iPhone</Link>
        </li>
        <li>
          <Link to="TechSpecs/">Tech Specs</Link>
        </li>
        <li>
          <Link to="BuyButton/">
            <button>Buy</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
