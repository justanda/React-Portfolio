import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Justin Miranda</Navbar.Brand>
        <Nav
          expand="lg"
          className="bg-body-tertiary justify-content-end text-center fixed-top"
          style={{ maxHeight: "100px" }}
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
