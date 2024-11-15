import React from "react";
import lineelement from "../../images/lineelement.webp";
import element from "../../images/element.webp";
import asterisk from "../../images/asterisk.svg";
import { Container, Button } from "react-bootstrap";
import "./HeroSection.css"
export default function HeroSection(props) {
  return (
      <section className="about-section">
        <div className="about-hero">
          <h1>{props.title}</h1>
          <div class="breadcrumb">
            <a href='/'>{props.previous}</a>
            <span className="separator">&gt;</span>
            <span>{props.current}</span>
          </div>
        </div>
        <img src={props.lineelement} alt="" />
        <img className="element" src={props.element} alt="" />
      </section>
  );
}
