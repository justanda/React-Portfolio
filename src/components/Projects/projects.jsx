import React from "react";
import img2 from "../../assets/images/img2.png";
import img1 from "../../assets/images/img1.png";
import img3 from "../../assets/images/img3.png";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "./Projects.css";
const projects = [
  {
    title: "Employee Database",
    description:
      "A employee database that allows you to view and manage employees.",
    image: img2,
    link: "https://github.com/justanda",
  },
  {
    title: "Vehichle Generator",
    description:
      "A budget tracker that allows you to track your expenses and income.",
    image: img1,
    link: "https://github.com/justanda/Project-0",
  },
  {
    title: "Penny Pinchers Alpha",
    description:
      "An eccomerce site that allows you to view items ans purchase them.",
    image: img3,
    link: "",
  },
  {
    title: "Weather Dashboard",
    description: "A work day scheduler that allows you to plan your day.",
    image:
      "https://unsplash.com/photos/a-body-of-water-that-has-some-water-in-it-UwciTUlaIEk",
    link: "",
  },
];

function Projects() {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col lg={6} key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                style={{ height: "200", width: "200" }}
              />
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
