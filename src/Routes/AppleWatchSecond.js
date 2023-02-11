import React from "react";
import "./AppleWatch.css";
function AppleWatchSecond({
  applewatchsecondlogo,
  applewatchsecondcolor,
  applewatchsecondheading1,
  applewatchsecondheading1Color,
  applewatchsecondheading1FontSize,
  applewatchsecondhheading2,
  applewatchsecondheading2Color,
  applewatchsecondheading2FontSize,
  applewatchsecondparaFontSize,
  applewatchsecondimageHeight,
  applewatchsecondimagewidth,
  applewatchsecondimageSrc,
  applewatchsecondbackgroundimagecolor,
}) {
  return (
    <div
      className="picapplewatchsecond"
      style={{
        backgroundColor: applewatchsecondbackgroundimagecolor,
      }}
    >
      <div className="applewatchlogo">
        <h1
          style={{
            color: applewatchsecondcolor,
          }}
        >
          {" "}
          {applewatchsecondlogo}WATCH
        </h1>
      </div>
      <h1
        style={{
          color: applewatchsecondheading1Color,
          fontSize: applewatchsecondheading1FontSize,
        }}
      >
        {applewatchsecondheading1}
      </h1>
      <h2
        style={{
          color: applewatchsecondheading2Color,
          fontSize: applewatchsecondheading2FontSize,
        }}
      >
        {" "}
        {applewatchsecondhheading2}
      </h2>
      <p
        style={{
          fontSize: applewatchsecondparaFontSize,
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
        src={applewatchsecondimageSrc}
        alt=""
        style={{
          height: applewatchsecondimageHeight,
          width: applewatchsecondimagewidth,
        }}
      ></img>
    </div>
  );
}

export default AppleWatchSecond;
