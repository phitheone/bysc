import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

import byoot from "../../images/byoot.png";
import title from "../../images/title.png";
import textbg from "../../images/textbg.png";
import mint from "../../images/mntbt.png";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <div className="HSuper" id="hero">
      <div className="HContainer">
        <div className="HRight">
          <img src={textbg} className="TextBgImg" />
          <div className="HRContent">
            <img src={title} className="TitleImg" />
            <p>
              Baby y00ts Social Club is a limited collection of 5,555 Baby y00ts
              that reside on Solana blockchain. We were inspired by our fellow
              y00ts to create the best derivative in the Solana ecosystem and
              make sure you enjoy the entire experience of y00ts.
              <br />
              <br />
              What’s on our plans? We are going to release staking platform and
              merch about us!! See you in The Park.
            </p>
          </div>
        </div>

        <div className="HLeft">
          <img src={byoot} />
        </div>
        <div className="HMintBtn">
          <a href="https://mint.bysc.xyz" target="_blank">
            <img src={mint} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
