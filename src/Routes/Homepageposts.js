import React from "react";
import Appletv4k from "./Appletv4k";
import AppleWatch from "./AppleWatch";
import AppleWatchsecond from "./AppleWatchSecond";
import GadgetsCard from "./GadgetsCard";
import AppleIcon from "@mui/icons-material/Apple";
import "./HomepagepostsStyles.css";
import IpadPro from "./IpadPro";

function Homepageposts() {
  return (
    <div className="Homepageposts">
      <GadgetsCard
        heading1="iPhone 14"
        heading1Color="black"
        heading1FontSize="4.7vw"
        heading2="Big and bigger."
        heading2Color="black"
        heading2FontSize="2.4vw"
        paraFontSize="2vw"
        imageHeight="fit-content"
        imagewidth="80vw"
        imageSrc="Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large-removebg-preview.png"
        imageBackground="white"
      />
      <br></br>
      <GadgetsCard
        heading1="iPhone 14 Pro"
        heading1Color="white"
        heading1FontSize="4.7vw"
        heading2="Pro.Beyond."
        heading2Color="white"
        heading2FontSize="2vw"
        paraFontSize="2vw"
        imageHeight="fit-content"
        imagewidth="70vw"
        imageSrc="158557-phones-news-feature-apple-iphone-14-and-14-pro-rumours-release-date-news-and-features-image4-wrw2nklekt-removebg-preview.png"
        imageBackground="black"
      />
      <br></br>
      <GadgetsCard
        heading1="iPhone 14"
        heading1Color="black"
        heading1FontSize="4.7vw"
        heading2="Lovable.Drawable.Magical."
        heading2Color="black"
        heading2FontSize="2vw"
        paraFontSize="2vw"
        imageHeight="fit-content"
        imagewidth="70vw"
        imageSrc="Das-iPad-2022-sieht-aus-wie-seine-groen-Kollegen-kostet-aber-auch-fast-so-viel-removebg-preview.png"
        imageBackground="white"
      />
      <br></br>
      <div className="forflexdisplayfirst">
        <IpadPro
          ipadheading1="iPad Pro"
          ipadnearheadingpic="https://www.apple.com/v/macbook-pro-13/m/images/overview/apple_silicon__b9y4fltj0os2_large_2x.jpg"
          ipadheading1Color="White"
          ipadheading1FontSize="2.2rem"
          ipadheading2="Supercharged by "
          ipadheading2Color="white"
          ipadheading2FontSize="1.2rem"
          ipadparaFontSize="1.2rem"
          ipadimageHeight="fit-content"
          ipadimagewidth="42rem"
          ipadimageSrc="ipad-pro-11-og-202210-removebg-preview.png"
          ipadimageBackground="black"
          nearheadingpicwidth="2.7rem"
          nearheadingpicheight="fit-content"
        />
        <br></br>

        <Appletv4k
          tvheaderimage="apple4klogo-removebg-preview.png"
          tvheading21="The Apple experience."
          tvheading21Color="black"
          tvheading21FontSize="1.5rem"
          tvheading22=" Cinematic in every sense"
          tvheading22Color="black"
          tvheading22FontSize="1.5rem"
          tvparaFontSize="1.2rem"
          tvimageSrc="apple-tv-4k-hero-select-202210_FMT_WHH-removebg-preview.png"
          tvimageHeight="fit-content"
          tvimagewidth="27rem"
          tvimageBackground="white"
          tvheaderpicwidth="8rem"
          tvheaderpicheight="fit-content"
          imageBackground="whitesmoke"
        />
      </div>
      {/* <div className="forflexdisplaysecond">
        <AppleWatch
          applewatchlogo={<AppleIcon />}
          applewatchcolor="black"
          applewatchheading1="U L T R A"
          applewatchheading1Color="orange"
          applewatchheading1FontSize=".8rem"
          applewatchheading2="Adventure awaits."
          applewatchheading2Color="Black"
          applewatchheading2FontSize="1.5rem"
          applewatchparaFontSize="1.2rem"
          applewatchimageHeight="fit-content"
          applewatchimagewidth="30rem"
          applewatchimageSrc="https://www.apple.com/in/apple-watch-ultra/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_large.jpg"
          applewatchbackgroundimagecolor="none"
        />
        <br></br>

        <AppleWatchsecond
          applewatchsecondlogo={<AppleIcon />}
          applewatchsecondcolor="white"
          applewatchsecondheading1="SERIES 8"
          applewatchsecondheading1Color="red"
          applewatchsecondheading1FontSize=".8rem"
          applewatchsecondhheading2="A healthy leap ahead."
          applewatchsecondheading2Color="white"
          applewatchsecondheading2FontSize="1.5rem"
          applewatchsecondparaFontSize="1.2rem"
          applewatchsecondimageHeight="fit-content"
          applewatchsecondimagewidth="30rem"
          applewatchsecondimageSrc="https://www.apple.com/v/apple-watch-series-8/b/images/meta/gps-lte__de35dernyje6_og.png"
          applewatchsecondbackgroundimagecolor="black"
        />
      </div> */}
      <br></br>
      <div className="forflexdisplaythird">
        <GadgetsCard
          heading1="AirPods Pro"
          heading1Color="white"
          heading1FontSize="4.7vw"
          heading2="Rebuilt from the sound up."
          heading2Color="white"
          heading2FontSize="2vw"
          paraFontSize="2vw"
          imageHeight="fit-content"
          imagewidth="100vw"
          imageSrc="https://www.apple.com/v/airpods-pro/g/images/meta/og__eui2mpgzwyaa_overview.png"
          imageBackground="black"
        />
        <br></br>
        <div className="wgcm">
          <h1>Work smarter,</h1>
          <h1> go faster,</h1>
          <h1>charge less.</h1>
        </div>

        <div className="mac">
          <h1>MAC DOES THAT.</h1>
          <br></br>
          <br></br>
          <a href="#">Learn more about MAC for business {">"}</a>
        </div>
      </div>
    </div>
  );
}

export default Homepageposts;
