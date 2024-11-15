import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MyNav.css";
import logo from "../../images/logo.svg";
import { CiSearch } from "react-icons/ci";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function MyNav() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand">
          <img src={logo} alt="Brand Logo" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navbar-links" navbarScroll>
            <NavDropdown
              title="Home"
              id="navbarScrollingDropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="#action3">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mobile Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other Services
              </NavDropdown.Item>
            </NavDropdown>{" "}
            <Nav.Link href="#about" className="nav-item">
              About
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="navbarScrollingDropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="#action3">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mobile Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Pages"
              id="navbarScrollingDropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="#action3">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mobile Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other Services
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Blog"
              id="navbarScrollingDropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="#action3">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mobile Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Other Services
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>

          <div className="nav-icons">
            <a className="search" href="">
              <CiSearch />
            </a>
            <a className="store" href="">
              <MdLocalGroceryStore />
            </a>
            <Button className="my-btn">
            Get a Quote <FaLongArrowAltRight/>
          </Button>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
