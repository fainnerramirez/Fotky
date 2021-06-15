import React from 'react';
import AuthContext from '../providers/Store';
import { Link } from 'react-router-dom';
import NavbarWrapp from './styles/Navbar.style';
//components Bootstrap
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//Assets
import Logo from '../assets/logo.png';

import { ROUTE } from './Route';

const NavbarApp: React.FC = () => {
  const { userNameFirebase, urlPhotoFirebase, authenticated } =
    React.useContext(AuthContext);

  return (
    <NavbarWrapp>
      <Navbar className="navbar">
        <Navbar.Brand href="/" className="navbar__logo">
          <Link to={ROUTE.HOME}>
            {authenticated ? (
              <img
                src={urlPhotoFirebase}
                alt={userNameFirebase}
                title={userNameFirebase}
              />
            ) : (
              <img src={Logo} alt="Logo alt" />
            )}
          </Link>
        </Navbar.Brand>

        <Nav className="navbar__nav">
          <Nav.Item className="navbar__nav__link">
            <Button className="navbar__nav__link--button mx-2">
              <Link
                className="text-reset text-decoration-none"
                to={ROUTE.ABOUT_DEVELOPER}
              >
                About Developer
              </Link>
            </Button>
          </Nav.Item>

          <Nav.Item className="navbar__nav__link">
            <Button className="navbar__nav__link--button mx-2">
              <Link
                className="text-reset text-decoration-none "
                to={ROUTE.SIGN_OUT}
              >
                Sign Up
              </Link>
            </Button>
            <Button className="navbar__nav__link--button mx-2">
              <Link
                className="text-reset text-decoration-none "
                to={ROUTE.LOGIN}
              >
                Login
              </Link>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
    </NavbarWrapp>
  );
};

export default NavbarApp;
