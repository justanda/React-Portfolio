import React from "react";
import { Container, Button } from "react-bootstrap";
import "./aboutMe.css";
// import aboutme from "./aboutme.jpg";

function AboutMe() {
  return (
    <Container className="about-me-container">
      <img
        className="profile-image"
        // src={aboutme}
        src="https://scontent-den2-1.xx.fbcdn.net/v/t1.6435-9/120559588_4659629397442465_1999105587500350450_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DrH0zy9deCwQ7kNvgHPmpHx&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=Au0jP2LsnibwjG3F0qiydJ-&oh=00_AYC3_J-ZVLyEy25spfi-Dobz53IGQqQqfXlJHrYnYD9CKQ&oe=678AB822"
        alt="Justin Miranda"
      />

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
