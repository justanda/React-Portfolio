import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
} from "react-bootstrap";
import resume from "../../assets/resume.pdf";
import "./resume.css";
import "./resume2.css";

const Resume = () => {
  const [styleSheet, setStyleSheet] = useState("resume.css"); // Default stylesheet

  const switchStyleSheet = () => {
    const currentStyleSheet = document.getElementById("styleSheet");
    if (currentStyleSheet) {
      const newStyleSheet =
        currentStyleSheet.getAttribute("href") === "resume.css"
          ? "resume2.css"
          : "resume.css";
      currentStyleSheet.setAttribute("href", newStyleSheet);
      setStyleSheet(newStyleSheet);
    }
  };

  const skills = [
    { skill: "HTML", percentage: 60 },
    { skill: "CSS", percentage: 50 },
    { skill: "JavaScript", percentage: 50 },
    { skill: "React", percentage: 40 },
    { skill: "Node.js", percentage: 40 },
    { skill: "MongoDB", percentage: 30 },
    { skill: "SQL", percentage: 40 },
  ];

  return (
    <Container className="resumeContainer">
      {/* Dynamically set the stylesheet */}
      <link id="styleSheet" rel="stylesheet" href={styleSheet} />

      <div>
        <Row>
          <Col>
            <h2 className="sectionTitle">Experience</h2>
            <Col>
              <Button onClick={switchStyleSheet} className="switchButton">
                {styleSheet === "resume.css"
                  ? "Switch to Style 2"
                  : "Switch to Style 1"}
              </Button>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body id="Card1">
              <Card.Title className="cardTitle">
                Senior Graphic Designer
              </Card.Title>
              <Card.Subtitle className="cardSubtitle">Denver, CO</Card.Subtitle>
              <Card.Subtitle className="cardSubtitle">
                2017-Present
              </Card.Subtitle>
              <Card.Text className="cardText">
                Led digital media campaigns providing customized marketing
                solutions for real estate professionals. Managed end-to-end
                project lifecycles, honing client communication,
                problem-solving, and project management skills. Applied SEO
                strategies to enhance clients' online visibility, a skill
                transferable to optimizing web applications.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body id="Card1">
              <Card.Title className="cardTitle">Carpenter</Card.Title>
              <Card.Subtitle className="cardSubtitle">Denver, CO</Card.Subtitle>
              <Card.Subtitle className="cardSubtitle">2015-2020</Card.Subtitle>
              <Card.Text className="cardText">
                Led construction projects requiring precision, collaboration,
                and adaptability. Strengthened analytical and problem-solving
                skills essential for debugging and code optimization.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <h2>Skills</h2>
            {skills.map((skill) => (
              <Row key={skill.skill} className="text-center mb-3">
                <Col md={3}>{skill.skill}</Col>
                <Col md={9}>
                  <ProgressBar
                    className="progressBar"
                    now={skill.percentage}
                    label={`${skill.percentage}%`}
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <Button
              className="downloadButton"
              href={resume}
              download="resume.pdf"
            >
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Row>
            <h2>Education</h2>
          </Row>
          <Row>
            <Col>
              <Card.Body className="cardRed">
                <Card.Title className="cardTitle">
                  University of Denver
                </Card.Title>
                <Card.Subtitle>Full Stack Web Development</Card.Subtitle>
                <Card.Subtitle>2024</Card.Subtitle>
                <Card.Text>
                  Focus: Web development, software engineering, and Agile
                  methodologies.
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Body className="cardBlue">
                <Card.Title className="cardTitle">
                  Highlands Ranch High School
                </Card.Title>
                <Card.Subtitle>Completed</Card.Subtitle>
                <Card.Subtitle>2012</Card.Subtitle>
                <Card.Text>
                  Focus: General studies, with an emphasis on math and science.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default Resume;
