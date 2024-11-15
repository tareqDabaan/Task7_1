import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";
import logo from "../../images/logo.svg";
import { MdLocationOn } from "react-icons/md";

import React from "react";
import { FaFacebookF, FaPhoneFlip, FaTwitter } from "react-icons/fa6";
import { LuMailSearch } from "react-icons/lu";
import { PiPhonePlusFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import footerThumb1_2 from "../../images/footerThumb1_2.webp";
import footerThumb1_1 from "../../images/footerThumb1_1.webp";
export default function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <Container className="container">
        <Row className="top-section py-4 text-center text-md-start contact-row">
  <Col
    md={4}
    className="d-flex align-items-center justify-content-start mb-3 p-3 mb-md-0 address-col"
  >
    <div className="footer-info-box-icon location me-2">
      <MdLocationOn />
    </div>
    <div className="address address-sm text-start">
      <h5>Address</h5>
      <p>4648 Rocky Road PA</p>
    </div>
  </Col>
  <Col
    md={4}
    className="d-flex align-items-center justify-content-start mb-3 p-3 mb-md-0 mail-col"
  >
    <div className="footer-info-box-icon me-2">
      <LuMailSearch />
    </div>
    <div className="address text-start">
      <h5>Send Email</h5>
      <p>info@example.com</p>
    </div>
  </Col>
  <Col
    md={4}
    className="d-flex align-items-center justify-content-start mb-3 p-3 mb-md-0 mail-col"
  >
    <div className="footer-info-box-icon me-2">
      <PiPhonePlusFill />
    </div>
    <div className="address text-start">
      <h5>Call Emergency</h5>
      <p>+99 0123 654 99</p>
    </div>
  </Col>
</Row>

          <Row className="main-footer py-5">
            <Col md={3} lg={3}>
              <img className="footer-logo" src={logo} alt="" />
              <p className="footer-text">
                Extech IT is a Phasellus ultricies augue vehicula ullacorper
                laoreet neque, a lacinia carubatur lacinia molis consectetur
                lectus posuere.
              </p>
              <div className="social-icons">
                <FaFacebookF className="s-icon" />
                <FaTwitter className="s-icon" />
                <FaYoutube className="s-icon" />
                <IoLogoInstagram className="s-icon" />
              </div>
            </Col>
            <Col md={2}>
              <h6 className="heading-text">Quick Links</h6>
              <div className="heading-line"></div>
              <ul className="footer-links">
                <li>
                  <span className="footer-arrow">»</span>
                  <a className="quick-links" href="#">
                    ExTech About Us
                  </a>
                </li>
                <li>
                  <span className="footer-arrow">»</span>
                  <a className="quick-links" href="#">
                    Our Services
                  </a>
                </li>
                <li>
                  <span className="footer-arrow">»</span>
                  <a className="quick-links" href="#">
                    Our Blogs
                  </a>
                </li>
                <li>
                  <span className="footer-arrow">»</span>
                  <a className="quick-links" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <span className="footer-arrow">»</span>
                  <a className="quick-links" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="recent-posts" md={3}>
              <h6 className="heading-text">Recent Posts</h6>
              <div className="heading-line"></div>
              <ul className="footer-posts">
                <li>
                  <div className="post-item">
                    <img
                      src={footerThumb1_1}
                      alt="Post Thumbnail"
                      className="post-thumbnail"
                    />
                    <div className="post-content">
                      <span className="post-date">15th April, 2024</span>
                      <p className="post-title">
                        Top 5 Most Famous Technology Trends in 2024
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="post-item">
                    <img
                      src={footerThumb1_2}
                      alt="Post Thumbnail"
                      className="post-thumbnail"
                    />
                    <div className="post-content">
                      <span className="post-date">20th June, 2024</span>
                      <p className="post-title">
                        The Surfing Man Will Blow Your Mind
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
            <Col md={4} className="contact-us-container">
              <h6 className="heading-text">Contact Us</h6>
              <div className="heading-line"></div>
              <div className="footer-contact-info">
                <p className="contact-item">
                  <LuMailSearch className="mx-2" />
                  info@example.com
                </p>
                <p className="contact-item">
                  <PiPhonePlusFill className="mx-2" /> +208-6666-0112
                </p>
              </div>
              <Form>
                <Form.Group controlId="formEmail" className="group">
                  <div className="email-input-wrapper">
                    <Form.Control
                      type="email"
                      placeholder="Your email address"
                      className="email-input"
                    />
                    <Button variant="primary" className="email-submit-btn">
                      →
                    </Button>
                  </div>
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="I agree to the Privacy Policy"
                  className="privacy-check"
                />
              </Form>
            </Col>
          </Row>
          <Row className="bottom-section d-flex text-center py-1">
            <div className="copywrite">
              <div>
                <p>© All Copyright 2024 by Extech</p>
              </div>
              <div className="policy">
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
