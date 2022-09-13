import React, { useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

import discord from "../../images/ds.png";
import twitter from "../../images/tw.png";
import mint from "../../images/mntbt.png";
import hamburger from "../../images/hamburger.png";
import close from "../../images/close-button.png";
import logo from "../../images/logoh.png";
import logow from "../../images/titlew.png";
import btn from "../../images/btn.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuImg, setMenuImg] = useState(hamburger);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  console.log(location);

  function openMenu() {
    if (isMenuOpen) {
      setMenuImg(hamburger);
    } else {
      setMenuImg(close);
    }

    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="NBSuper">
      {console.log("Location: " + location.pathname)}
      <div className="NBContainer">
        <div className="NavLink">
          <Link
            to="toke"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={btn} alt="s00n" />
          </Link>
        </div>
        <div className="NavLink">
          <Link
            to="toke"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={btn} alt="s00n" />
          </Link>
        </div>
        <div
          className="Logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} />
        </div>
        <div className="NavLink">
          <Link
            to="toke"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={btn} alt="s00n" />
          </Link>
        </div>
        <div className="NavLink">
          <Link
            to="toke"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={btn} alt="s00n" />
          </Link>
        </div>
      </div>
      <div className="MovilBtn" onClick={() => openMenu()}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="NBButtons">
        {/* <div className="NBBuyButton">
          <br /> MINT <br />
          <br />
        </div> */}
        {location.pathname === "/mint" ? (
          <>
            <br />
            <br />
            <br />
          </>
        ) : (
          <>
            <div className="MintBtn">
              <a href="https://mint.bysc.xyz" target="_blank">
                <img src={mint} />
              </a>
            </div>
          </>
        )}

        <a href="https://discord.gg/RrCa7QWJgx" target="_blank">
          <img src={discord} />
        </a>
        <a href="https://twitter.com/BabySocialClub" target="_blank">
          <img src={twitter} />
        </a>
      </div>
      <div className={"NavPanel-" + (isMenuOpen ? "Open" : "Closed")}>
        <div className="PanelLinks">
          <div className="PLogo">
            <Link
              to="hero"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <img src={logow} />
            </Link>
          </div>
          <div className="PanelSocials">
            <a
              href="https://discord.gg/RrCa7QWJgx"
              target="_blank"
              onClick={() => openMenu()}
            >
              <img src={discord} height="60" />
            </a>
            <a
              href="https://twitter.com/BabySocialClub"
              target="_blank"
              onClick={() => openMenu()}
            >
              <img src={twitter} height="60" />
            </a>
          </div>
          <div className="PNavButtons">
            <div className="LPNavButtons">
              <div className="PNavLink">
                <Link
                  to="toke"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-74}
                >
                  <img src={btn} alt="s00n" />
                </Link>
              </div>
              <div className="PNavLink">
                <Link
                  to="toke"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-74}
                >
                  <img src={btn} alt="s00n" />
                </Link>
              </div>
            </div>
            <div className="RPNavButtons">
              <div className="PNavLink">
                <Link
                  to="toke"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-74}
                >
                  <img src={btn} alt="s00n" />
                </Link>
              </div>
              <div className="PNavLink">
                <Link
                  to="toke"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-74}
                >
                  <img src={btn} alt="s00n" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
