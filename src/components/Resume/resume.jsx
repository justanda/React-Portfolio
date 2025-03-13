import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
} from "react-bootstrap";

import "./resume.css";
import ResumePage from "../../pages/resume";

const Resume = () => {
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
      <Row>
        <Col>
          <h2 className="sectionTitle">Experience</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="card">
            <Card.Body>
              <Card.Title className="cardTitle">
                Senior Graphic Designer
              </Card.Title>
              <Card.Subtitle className="cardSubtitle">
                Denver, CO | 2017-Present
              </Card.Subtitle>
              <Card.Text className="cardText">
                Led digital media campaigns providing customized marketing
                solutions for real estate professionals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Body>
              <Card.Title className="cardTitle">Carpenter</Card.Title>
              <Card.Subtitle className="cardSubtitle">
                Denver, CO | 2015-2020
              </Card.Subtitle>
              <Card.Text className="cardText">
                Led construction projects requiring precision, collaboration,
                and adaptability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <h2 className="skillsSection">Skills</h2>
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
            href="https://docs.google.com/document/d/1Co4eJePIo_3j5ZAtFUbz1fvwmZv8qyW1cIy_OqYuWwQ/edit?usp=sharing"
            target="_blank"
            size="lg"
            variant="primary"
          >
            View Resume
          </Button>
        </Col>
      </Row>
      <Row>
        <h2>Education</h2>
        <Col>
          <Card className="cardRed">
            <Card.Body className="cardBody">
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
          </Card>
        </Col>
        <Col>
          <Card className="cardRed">
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">
                Highlands Ranch High School
              </Card.Title>
              <Card.Subtitle>Completed</Card.Subtitle>
              <Card.Subtitle>2012</Card.Subtitle>
              <Card.Text>
                Focus: General studies, with an emphasis on math and science.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
