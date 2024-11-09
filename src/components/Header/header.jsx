import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Justin Miranda</Navbar.Brand>
        <Nav
          expand="lg"
          className="bg-body-tertiary"
          style={{ maxHeight: "100px" }}
        >
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/projects">Projects</Nav.Link>
          <Nav.Link to="/contact">Contact</Nav.Link>
          <Nav.Link to="/resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
