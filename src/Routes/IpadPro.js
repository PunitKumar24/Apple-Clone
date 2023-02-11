import React from "react";
import "./IpadPro.css";
function IpadPro({
  ipadheading1,
  ipadnearheadingpic,
  ipadheading1Color,
  ipadheading1FontSize,
  ipadheading2,
  ipadheading2Color,
  ipadheading2FontSize,
  ipadparaFontSize,
  ipadimageSrc,
  ipadimageHeight,
  ipadimagewidth,
  ipadimageBackground,
  nearheadingpicwidth,
  nearheadingpicheight,
}) {
  return (
    <div
      className="picipadpro"
      style={{
        backgroundColor: ipadimageBackground,
      }}
    >
      <h1
        style={{
          color: ipadheading1Color,
          fontSize: ipadheading1FontSize,
        }}
      >
        {ipadheading1}
      </h1>

      <div className="nearheadingpic">
        <h2
          style={{
            color: ipadheading2Color,
            fontSize: ipadheading2FontSize,
          }}
        >
          {ipadheading2}
          <img
            src={ipadnearheadingpic}
            style={{
              width: nearheadingpicwidth,
              height: nearheadingpicheight,
            }}
            alt=""
          ></img>
        </h2>
      </div>
      <br></br>
      <p
        style={{
          fontSize: ipadparaFontSize,
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
      <br></br>
      <img
        src={ipadimageSrc}
        alt=""
        style={{
          height: ipadimageHeight,
          width: ipadimagewidth,
        }}
      ></img>
    </div>
  );
}

export default IpadPro;
