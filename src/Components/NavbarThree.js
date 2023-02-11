import React from "react";
import "./NavbarThreeStyles.css";
import { Link } from "react-router-dom";

function NavbarThree() {
  return (
    <div className="NavbarThreeHeader">
      Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank
      credit cards.* Plus No Cost EMI from most leading banks**{" "}
      <Link className="shopiphone" to={"Shopiphone/"}>
        Shop iPhone {">"}
      </Link>
    </div>
  );
}

export default NavbarThree;
