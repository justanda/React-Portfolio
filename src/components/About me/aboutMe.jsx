// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import "./AboutMe.css";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import resume from "../../assets/resume.pdf";

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <section style={{ marginTop: 20 }}>
            <h2>About Me</h2>
            <p>
              Passionate and driven software developer with a background in
              business development and digital media. Recently completed a
              coding bootcamp at the University of Denver, gaining proficiency
              in full-stack web development including HTML, CSS, JavaScript,
              Node.js, React.js, SQL, and MongoDB. Recognized for strong
              problem-solving skills, a collaborative mindset, and a commitment
              to continuous learning. Eager to contribute to innovative
              development teams and grow into a senior developer role over time.
            </p>
          </section>

          <Button
            style={{ marginTop: 20 }}
            target="_blank"
            href="https://docs.google.com/document/d/1ySToPSqwfbvpZFY11vNxtcJ0_a_5z47XYVY_jJNYDnA/edit?usp=sharing"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </Col>
        <Col md={6}>
          <img
            style={{
              boxShadow: "0 0 20px 0 rgba(0, 0, 98, 0.2)",
              display: "block",
              flexWrap: "wrap",
              width: "400px",
              height: "450px",
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 30,
              border: "2px solid #f2f2f2",
            }}
            src="https://scontent-den2-1.xx.fbcdn.net/v/t1.6435-9/120559588_4659629397442465_1999105587500350450_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=DrH0zy9deCwQ7kNvgHPmpHx&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=Au0jP2LsnibwjG3F0qiydJ-&oh=00_AYC3_J-ZVLyEy25spfi-Dobz53IGQqQqfXlJHrYnYD9CKQ&oe=678AB822"
            alt="Justin 
          Miranda"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
