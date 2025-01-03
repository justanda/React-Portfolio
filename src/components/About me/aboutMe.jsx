import React from "react";
import { Container, Button } from "react-bootstrap";
import "./aboutMe.css";
import aboutme from "../../assets/images/aboutme.jpeg";

function AboutMe() {
  return (
    <Container className="about-me-container">
      <img className="profile-image" src={aboutme} alt="Justin Miranda" />

      <div className="about-me-card">
        <h2>About Me</h2>
        <p>
          Passionate and driven software developer with a background in business
          development and digital media. Recently completed a coding bootcamp at
          the University of Denver, gaining proficiency in full-stack web
          development including HTML, CSS, JavaScript, Node.js, React.js, SQL,
          and MongoDB. Recognized for strong problem-solving skills, a
          collaborative mindset, and a commitment to continuous learning. Eager
          to contribute to innovative development teams and grow into a senior
          developer role over time.
        </p>
      </div>

      <Button
        className="resume-button"
        href="https://docs.google.com/document/d/1Co4eJePIo_3j5ZAtFUbz1fvwmZv8qyW1cIy_OqYuWwQ/edit?usp=sharing"
        target="_blank"
      >
        View Resume
      </Button>
    </Container>
  );
}

export default AboutMe;
