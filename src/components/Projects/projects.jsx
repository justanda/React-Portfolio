import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "./Projects.css";
const projects = [
  {
    title: "Employee Database",
    description:
      "A employee database that allows you to view and manage employees.",
    image:
      "https://unsplash.com/photos/a-body-of-water-that-has-some-water-in-it-UwciTUlaIEk",
    link: "https://github.com/justanda",
  },
  {
    title: "Budget Tracker",
    description:
      "A budget tracker that allows you to track your expenses and income.",
    image:
      "https://unsplash.com/photos/a-body-of-water-that-has-some-water-in-it-UwciTUlaIEk",
    link: "https://github.com/justanda/Project-0",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that allows you to view the weather in different cities.",
    image:
      "https://unsplash.com/photos/a-body-of-water-that-has-some-water-in-it-UwciTUlaIEk",
    // link: "
  },
  {
    title: "Work Day Scheduler",
    description: "A work day scheduler that allows you to plan your day.",
    image:
      "https://unsplash.com/photos/a-body-of-water-that-has-some-water-in-it-UwciTUlaIEk",
    // link: "
  },
];

function Projects() {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col lg={6} key={index}>
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
