import React from "react";
import NavbarWrapp from "./styles/stylesNavbar/navbar";
//components Bootstrap
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//Assets
import Logo from "../assets/logo.png";

const NavbarApp: React.FC = () => {
  return (
    <NavbarWrapp>
      <Navbar className="navbar">
        <Navbar.Brand href="/" className="navbar__logo">
          <img src={Logo} alt="Logo App" />
        </Navbar.Brand>
        <Nav className="navbar__nav ml-auto">
          <Nav.Item className="mr-5 navbar__nav__link">
            <Nav.Link className="link">
              <a href="!#">Home</a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navbar__nav__link">
            <Button className="navbar__nav__link--button">
              About Developer
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </NavbarWrapp>
  );
};

export default NavbarApp;
