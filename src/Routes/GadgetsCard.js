import "./GagdetsCardsStyles.css";
import React from "react";

const GadgetsCard = ({
  heading1,
  heading1Color,
  heading1FontSize,
  heading2,
  heading2Color,
  heading2FontSize,
  paraFontSize,
  imageSrc,
  imageHeight,
  imagewidth,
  imageBackground,
}) => {
  return (
    <div
      className="pic"
      style={{
        backgroundColor: imageBackground,
      }}
    >
      <h1
        style={{
          color: heading1Color,
          fontSize: heading1FontSize,
        }}
      >
        {heading1}
      </h1>
      <h2
        style={{
          color: heading2Color,
          fontSize: heading2FontSize,
        }}
      >
        {heading2}
      </h2>
      <p
        style={{
          fontSize: paraFontSize,
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
        src={imageSrc}
        alt=""
        style={{
          height: imageHeight,
          width: imagewidth,
        }}
      ></img>
    </div>
  );
};
export default GadgetsCard;
