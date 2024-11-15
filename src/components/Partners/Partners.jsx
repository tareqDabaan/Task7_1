import React from "react";
import brandLogo1_1 from "../../images/brandLogo1_1.svg";
import brandLogo1_2 from "../../images/brandLogo1_2.svg";
import brandLogo1_3 from "../../images/brandLogo1_3.svg";
import brandLogo1_4 from "../../images/brandLogo1_4.svg";
import brandLogo1_5 from "../../images/brandLogo1_5.svg";
import "./Partners.css";
import heroShape1_3 from "../../images/heroShape1_3.webp";
import { Button, Container } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const brandLogos = [
  brandLogo1_1,
  brandLogo1_2,
  brandLogo1_3,
  brandLogo1_4,
  brandLogo1_5,
];

export default function Partners() {
  return (
    <section>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img className="explore-circle" src={heroShape1_3} alt="" />
        <div className="brand-logos">
          {brandLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Brand Logo ${index + 1}`} />
          ))}
        </div>
      </div>
      <Container className="team">
        <div className="title">
          <a href="">OUR SERVICES</a>
          <h2>Elivating Business With IT Ingenuity</h2>
        </div>
        <div className="swap-container mt-4">
          <a className="left-arr"><FaLongArrowAltLeft/></a>
          <a className="right-arr"><FaLongArrowAltRight/></a>
        </div>
      </Container>
    </section>
  );
}
