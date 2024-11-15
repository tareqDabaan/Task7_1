import React from "react";
import "./AboutContent.css";
import lineelement from "../../images/lineelement.webp";
import element from "../../images/element.webp";
import asterisk from "../../images/asterisk.svg";
import { Container, Button } from "react-bootstrap";
import HeroSection from "../HeroSection/HeroSection";
export default function AboutContent() {
  return (
    <div>
      <HeroSection 
        title="About Us"
        previous = "Home"
        current = "About Us"
        lineelement = {lineelement}
        element = {element}
      />

      <div className="services-list">
        <ul>
          <li className="cyber">
            <img src={asterisk} alt="" />
            Cyber Security
            <img className="after-cyber" src={asterisk} alt="" />
          </li>
          <li className="it">
            <img src={asterisk} alt="" />
            IT Solution
          </li>
          <li className="tech">
            <img src={asterisk} alt="" />
            Technology
          </li>
          <li className="data-science">
            <img src={asterisk} alt="" />
            Data Science
          </li>
        </ul>
      </div>

      <Container className="team">
        <div className="title">
          <a href="">TEAM MEMBERS</a>
          <h2>Our Dedicated Team Members</h2>
        </div>
        <div className="btn-container">
          <Button className="all-members-btn">
            All Members<span class="all-members-arrow">→</span>
          </Button>
        </div>
      </Container>

    </div>
  );
}
