import React from "react";
import "./Steps.css";
import ved from "../../images/ved.webp";

export default function Steps() {
  return (
    <div className="whole-container">
      <div className="ved-container">
        <img src={ved}></img>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <h1 className="step-number">01</h1>
          <h3 className="step-title">Requirement</h3>
          <p className="step-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="step-card">
          <h1 className="step-number">02</h1>
          <h3 className="step-title">UI/UX Design</h3>
          <p className="step-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="step-card">
          <h1 className="step-number">03</h1>
          <h3 className="step-title">Prototype</h3>
          <p className="step-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="step-card">
          <h1 className="step-number">04</h1>
          <h3 className="step-title">Development</h3>
          <p className="step-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>
    </div>
  );
}
