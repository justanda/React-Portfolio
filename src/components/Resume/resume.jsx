import React, { useState, useEffect } from "react";
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

const Resume = () => {
  const [styleSheet, setStyleSheet] = useState("resume.css");

  const switchStyleSheet = () => {
    setStyleSheet((prev) =>
      prev === "resume.css" ? "resume2.css" : "resume.css"
    );
  };

  useEffect(() => {
    // Dynamically update the stylesheet in the document head
    const existingLink = document.getElementById("dynamic-stylesheet");
    if (existingLink) {
      existingLink.href = styleSheet;
    } else {
      const linkElement = document.createElement("link");
      linkElement.id = "dynamic-stylesheet";
      linkElement.rel = "stylesheet";
      linkElement.href = styleSheet;
      document.head.appendChild(linkElement);
    }
  }, [styleSheet]);

  const skills = [
    { skill: "HTML", percentage: 60 },
    { skill: "CSS", percentage: 60 },
    { skill: "JavaScript", percentage: 50 },
    { skill: "React", percentage: 40 },
    { skill: "Node.js", percentage: 40 },
    { skill: "MongoDB", percentage: 30 },
    { skill: "SQL", percentage: 40 },
  ];

  return (
    <Container className="resumeContainer">
      <Row className="text-center mb-4">
        <Col>
          {/* <Button onClick={switchStyleSheet} className="switchButton">
            {styleSheet === "resume.css"
              ? "Switch to Alternate Style"
              : "Switch to Default Style"}
          </Button> */}
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="sectionTitle">Experience</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card.Body id="Card1">
            <Card.Title className="cardTitle">
              Senior Graphic Designer
            </Card.Title>
            <Card.Subtitle className="cardSubtitle">Denver, CO</Card.Subtitle>
            <Card.Subtitle className="cardSubtitle">2017-Present</Card.Subtitle>
            <Card.Text className="cardText">
              Led digital media campaigns providing customized marketing
              solutions for real estate professionals.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body id="Card1">
            <Card.Title className="cardTitle">Carpenter</Card.Title>
            <Card.Subtitle className="cardSubtitle">Denver, CO</Card.Subtitle>
            <Card.Subtitle className="cardSubtitle">2015-2020</Card.Subtitle>
            <Card.Text className="cardText">
              Led construction projects requiring precision, collaboration, and
              adaptability.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      {/* Skills Section */}
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

      {/* Download Resume Button */}
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

      {/* Education Section */}
      <Row>
        <h2>Education</h2>
        <Col>
          <Card.Body className="cardRed">
            <Card.Title className="cardTitle">University of Denver</Card.Title>
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
    </Container>
  );
};

export default Resume;
