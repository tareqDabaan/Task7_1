import React, { useState } from "react";
import { useRef } from "react";
import { FaBars, FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import "./AboutNav.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "../AboutContent/AboutContent.css";
import logo from "../../images/logo.svg";
import Button from "react-bootstrap/Button";
import { CiSearch } from "react-icons/ci";
import plane from "../../images/plane.webp";


export default function AboutNav() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img className="plane" src={plane} alt="" />

      <img className="logo" src={logo} alt="" />
      <nav ref={navRef}>
        <a href="">Home <MdOutlineKeyboardArrowDown/></a>
        <a href="">About</a>
        <a href="">Services <MdOutlineKeyboardArrowDown/> </a>
        <a href="">Pages <MdOutlineKeyboardArrowDown/></a>
        <a href="">Blog <MdOutlineKeyboardArrowDown/></a>
        <a href="">Contact</a>

        <a className="search" href="">
          <CiSearch />
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <div className="nav-right-button">
        <button type="submit" className="get-quote-btn">
              Get Quote <FaLongArrowAltRight/>
            </button>
      </div>
    </header>
  );
}
