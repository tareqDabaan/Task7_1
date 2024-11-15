import React from "react";
import heroThumb1_1 from "../../images/heroThumb1_1.webp";
import profileShape1_1 from "../../images/profileShape1_1.webp";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Col, Row, Button, Card } from "react-bootstrap";
export default function Hero() {
  return (
    <section className="Hero">
      <div className="Content-Container">
        <div>
          <p className="Quote">Everything You Need To Create A Website</p>
        </div>
        <div className="Content">
          <h2 className="content-title">
            Business Innovation With IT Services Expertise
          </h2>
          <div className="specifications">
            <Row>
              <Col xs={12} md={6}>
                <li>Deployment and Support</li>
              </Col>
              <Col xs={12} md={6}>
                <li>Flexibility and Adaptability</li>
              </Col>
              <Col xs={12} md={6}>
                <li>Discovery and Analysis</li>
              </Col>
              <Col xs={12} md={6}>
                <li>Competitive Advantages</li>
              </Col>
            </Row>
          </div>

          <Button className="start-btn">
            Get Started <FaLongArrowAltRight/>
          </Button>

          <Card className="hero-card">
            <Row>
              <Col lg={6} className="review-section">
                <Card.Body style={{backgroundColor:'#4c5dff'}} className="card-body">
                  <Card.Title className="review-title">Trustpilot</Card.Title>
                  <div className="review-details">
                    <div className="avatars">
                      <img
                        src={profileShape1_1}
                        alt="User 1"
                        className="avatar"
                      />
                    </div>
                    <div className="rating">
                      <span className="stars">★★★</span>
                      <br></br>
                      <span className="review-count">450+ reviews</span>
                    </div>
                  </div>
                </Card.Body>
              </Col>
              <Col lg={6} className="review-section">
                <Card.Body style={{backgroundColor:'#4c5dff'}}>
                  <Card.Title className="review-title">Google</Card.Title>
                  <div className="review-details">
                    <div className="avatars">
                      <img
                        src={profileShape1_1}
                        alt="User 1"
                        className="avatar"
                      />
                    </div>
                    <div className="rating">
                      <span className="stars">★★★</span>
                      <br></br>
                      <span className="review-count">450+ reviews</span>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      <div className="image">
        <img className="hero-thumb" src={heroThumb1_1} alt="" />
      </div>
      
    </section>

  );
}
