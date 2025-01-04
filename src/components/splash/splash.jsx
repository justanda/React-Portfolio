import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { gsap } from "gsap";
import "./splash.css";
import yellow from "../../assets/yellow.png";

const Intro = () => {
  const skateboardRef = useRef(null);

  const handleSkateboardClick = () => {
    const timeline = gsap.timeline();

    // Initial movement: move up and rotate
    timeline.to(skateboardRef.current, {
      y: -200,
      rotation: 360,
      duration: 2,
      ease: "power2.out",
    });

    // Fall with gravity
    timeline.to(skateboardRef.current, {
      y: 0,
      rotation: 720,
      duration: 1,
      ease: "bounce.out",
    });
  };

  return (
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
          ref={skateboardRef}
          className="zoom-image"
          src={yellow}
          alt="Decorative Yellow Element"
          onClick={handleSkateboardClick}
        />
      </div>
    </Container>
  );
};

export default Intro;
