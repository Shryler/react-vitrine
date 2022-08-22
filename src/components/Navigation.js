import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MonPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">Accueil</NavLink>
              <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                <NavLink to="/about-me" className="dropdown-item">A propos de moi</NavLink>
                <NavLink to="/career" className="dropdown-item">Parcours</NavLink>
                <NavLink to="/experiences" className="dropdown-item">Expériences</NavLink>
                <NavLink to="/competences" className="dropdown-item">Compétences</NavLink>
                <NavLink to="/portfolio" className="dropdown-item">Portfolio</NavLink>
              </NavDropdown>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;


