import React from "react";
import "./AppleWatch.css";
function AppleWatch({
  applewatchlogo,
  applewatchheading1,
  applewatchheading1Color,
  applewatchheading1FontSize,
  applewatchheading2,
  applewatchheading2Color,
  applewatchheading2FontSize,
  applewatchparaFontSize,
  applewatchimageHeight,
  applewatchimagewidth,
  applewatchimageSrc,
  applewatchbackgroundimagecolor,
  applewatchcolor,
}) {
  return (
    <div
      className="picapplewatch"
      style={{
        backgroundColor: applewatchbackgroundimagecolor,
      }}
    >
      <div className="applewatchlogo">
        <h1
          style={{
            color: applewatchcolor,
          }}
        >
          {" "}
          {applewatchlogo}WATCH
        </h1>
      </div>
      <h1
        style={{
          color: applewatchheading1Color,
          fontSize: applewatchheading1FontSize,
        }}
      >
        {applewatchheading1}
      </h1>
      <h2
        style={{
          color: applewatchheading2Color,
          fontSize: applewatchheading2FontSize,
        }}
      >
        {" "}
        {applewatchheading2}
      </h2>
      <p
        style={{
          fontSize: applewatchparaFontSize,
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
        src={applewatchimageSrc}
        alt=""
        style={{
          height: applewatchimageHeight,
          width: applewatchimagewidth,
        }}
      ></img>
    </div>
  );
}

export default AppleWatch;
