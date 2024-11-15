import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import { LuMailSearch } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { PiPhonePlusFill } from "react-icons/pi";
import lineelement from "../../images/lineelement.webp";
import element from "../../images/element.webp";
import "./ContactContent.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import video from "../../images/video.webp";
import { Col, Row, Container, Card } from "react-bootstrap";
export default function ContactContent() {

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.700620261554!2d47.9932879!3d29.3790539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf849850d401e9%3A0x767eb1122316959c!2sAl%20Hamra%20Tower%2C%20Al-Shuhada%20St%2C%20Al%20Kuwayt!5e0!3m2!1sen!2skw!4v1731565081891!5m2!1sen!2skw`  
return (
    <div>
      <HeroSection
        title="Contact Us"
        previous="Home"
        current="Contact Us"
        lineelement={lineelement}
        element={element}
      />

      <div className="contact-form-section">
        {/* Contact Info Section */}
        <Card className="contact-info-section">
          {/* First Info Item */}
          <Card.Body className="border-bottom cardbody d-flex align-items-center">
            <div className="ff-info-box-icon">
              <PiPhonePlusFill className="ff-cont-icon" />
            </div>
            <div className="ms-0 d-flex flex-column align-items-start">
              <Card.Title className="mb-1 small-font">Call Us 7/24</Card.Title>
              <Card.Text>+208-555-0112</Card.Text>
            </div>
          </Card.Body>

          {/* Second Info Item */}
          <Card.Body className="border-bottom cardbody d-flex align-items-center">
            <div className="ff-info-box-icon">
              <LuMailSearch className="cont-icon" />
            </div>
            <div className="ms-0 d-flex flex-column align-items-start">
              <Card.Title className="mb-1 small-font">Make a Quote</Card.Title>
              <Card.Text>Infotech@gmail.com</Card.Text>
            </div>
          </Card.Body>

          {/* Third Info Item */}
          <Card.Body className="d-flex cardbody align-items-center justify-content-start">
            <div className="ff-info-box-icon location">
              <MdLocationOn className="cont-icon" />
            </div>
            <div className="ms-0 d-flex flex-column align-items-start">
              <Card.Title className=" mb-1 small-font">Location</Card.Title>
              <Card.Text className="">4517 Washington Ave.</Card.Text>
            </div>
          </Card.Body>

          {/* Video Section */}
          <Card.Body className="video-section p-0">
            <img src={video} alt="Video" className="w-100" />
          </Card.Body>
        </Card>

        {/* Form Section */}
        <div className="form-section">
          <h2>Ready to Get Started?</h2>
          <p>
            Nullam varius, erat quis laoreet dictum, eros urna varius eros, ut
            blandit felis odio in turpis. Quisque rhoncus, eros in auctor
            ultricies.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <div>
                <label htmlFor="">Your Name</label>
                <input type="text" required />
              </div>
              <div>
                <label htmlFor="">Your Email</label>
                <input type="email" required />
              </div>
            </div>
            <label htmlFor="">Your Message</label>
            <textarea required></textarea>
            <button type="submit" className="submit-button">
              Send Message <FaLongArrowAltRight />
            </button>
          </form>
        </div>
      </div>

      <iframe src={mapUrl} 
        loading="lazy"
        width='100%'
        height='300px'

      ></iframe>


    </div>
  );
}
