import React from "react";
import "./Appletv4k.css";
function Appletv4k({
  tvheaderimage,
  tvheading21,
  tvheading21Color,
  tvheading21FontSize,
  tvheading22,
  tvheading22Color,
  tvheading22FontSize,
  tvparaFontSize,
  tvimageSrc,
  tvimageHeight,
  tvimagewidth,
  tvimageBackground,
  tvheaderpicwidth,
  tvheaderpicheight,
}) {
  return (
    <div
      className="picappletv4k"
      style={{
        backgroundColor: tvimageBackground,
      }}
    >
      <img
        src={tvheaderimage}
        style={{ width: tvheaderpicwidth, height: tvheaderpicheight }}
        alt=""
      ></img>

      <div className="headerss">
        <h2
          style={{
            color: tvheading21Color,
            fontSize: tvheading21FontSize,
          }}
        >
          {tvheading21}
        </h2>
        <h2
          style={{
            color: tvheading22Color,
            fontSize: tvheading22FontSize,
          }}
        >
          {tvheading22}
        </h2>
      </div>

      <br></br>
      <p
        style={{
          fontSize: tvparaFontSize,
        }}
      >
        <a href="LearnMore/">
          Learn More
          {">"}
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="Buy/">
          Buy
          {">"}
        </a>
      </p>
      <div className="appletv4ksetupremorte">
        <img
          src={tvimageSrc}
          alt=""
          style={{
            height: tvimageHeight,
            width: tvimagewidth,
          }}
        ></img>
      </div>
    </div>
  );
}

export default Appletv4k;
