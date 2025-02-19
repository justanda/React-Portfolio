import React from "react";
import { Container, Button } from "react-bootstrap";
import "./aboutMe.css";
import aboutme from "../../assets/images/aboutme.jpeg";

function AboutMe() {
  return (
    <Container className="about-me-container">
      {/* Profile Image */}
      <img className="profile-image" src={aboutme} alt="Justin Miranda" />

      {/* About Me Card */}
      <div className="about-me-card">
        <h2 className="aboutTitle">About Me</h2>
        <p>
          Hi, I’m Justin! At my core, I’m a builder whether it’s creating apps,
          crafting homes, or shaping new experiences through adventure. I find
          joy in taking ideas and turning them into something tangible, whether
          it’s a perfectly framed wall, a functional web app, or a day spent
          exploring a new city. When I’m building website or solving problems,
          you’ll find me skateboarding, traveling, or hunting down the best
          local eats. For me, life is about creating and connecting whether
          that’s through the things I build, the people I meet, or the places I
          explore. I believe every project, big or small, tells a story. Let’s
          connect and build something meaningful together.
        </p>
      </div>

      {/* Resume Button */}
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
