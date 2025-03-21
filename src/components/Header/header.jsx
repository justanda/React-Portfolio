import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./header.css";

function NavScrollExample() {
  return (
    <div>
      <ScrollIndicator />
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-brand">
            Justin Miranda
          </Navbar.Brand>
          <Nav className="nav">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/travels">Travels</Nav.Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

/* Scroll Indicator Component */
const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = React.useState(0);

  React.useEffect(() => {
    const updateScrollWidth = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollWidth(scrolled);
    };
    window.addEventListener("scroll", updateScrollWidth);
    return () => window.removeEventListener("scroll", updateScrollWidth);
  }, []);

  return (
    <div
      style={{
        height: "5px",
        background: "#007bff",
        width: `${scrollWidth}%`,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    />
  );
};

export default NavScrollExample;
