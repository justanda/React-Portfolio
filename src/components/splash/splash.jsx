import React from "react";
import { Container, Button } from "react-bootstrap";
import "./splash.css";
import yellow from "../../assets/yellow.png";

const Intro = () => (
  <Container className="intro-container">
    <div className="intro-content">
      <h2 className="animated-text">Welcome to My Portfolio</h2>
      <p className="fade-in-paragraph">
        Discover my projects and skills by entering below.
      </p>
      <a href="/about">
        <Button
          className="enter-button hover-effect"
          variant="primary"
          size="lg"
        >
          Enter
        </Button>
      </a>
      <br />
      <img
        className="zoom-image"
        src={yellow}
        alt="Decorative Yellow Element"
      />
    </div>
  </Container>
);

export default Intro;
