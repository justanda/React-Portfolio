import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
} from "react-bootstrap";
// import resume from "../../assets/resume.pdf";

const Resume = () => {
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
    <Container>
      <Row>
        <Col>
          <h2>Experience</h2>
          <Card>
            <Card.Body>
              <Card.Title>Full Stack Developer</Card.Title>
              <Card.Subtitle>Denver, CO</Card.Subtitle>
              <Card.Subtitle>2024-Present</Card.Subtitle>
              <Card.Text>
                I am a full stack developer with a passion for building web
                applications.
              </Card.Text>
            </Card.Body>
          </Card>
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
            href="https://docs.google.com/document/d/1ySToPSqwfbvpZFY11vNxtcJ0_a_5z47XYVY_jJNYDnA/edit?usp=sharing"
            download="https://docs.google.com/document/d/1ySToPSqwfbvpZFY11vNxtcJ0_a_5z47XYVY_jJNYDnA/edit?usp=sharing"
          >
            Download Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
