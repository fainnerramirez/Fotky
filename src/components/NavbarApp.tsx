import React from 'react';
import { Link } from 'react-router-dom';
import NavbarWrapp from './styles/stylesNavbar/navbar';
//components Bootstrap
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//Assets
import Logo from '../assets/logo.png';

import * as ROUTE from '../components/Route';

const NavbarApp: React.FC = () => {
  return (
    <NavbarWrapp>
      <Navbar className="navbar">
        <Navbar.Brand href="/" className="navbar__logo">
          <Link to={ROUTE.HOME}>
            <img src={Logo} alt="Logo App" />
          </Link>
        </Navbar.Brand>

        <Nav className="navbar__nav ml-auto">
          <Nav.Item className="mr-5 navbar__nav__link">
            <Nav.Link className="link">
              <Link to={ROUTE.HOME}>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navbar__nav__link">
            <Button className="navbar__nav__link--button">
              <Link
                className="text-reset text-decoration-none"
                to={ROUTE.ABOUT_DEVELOPER}
              >
                About Developer
              </Link>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </NavbarWrapp>
  );
};

export default NavbarApp;
