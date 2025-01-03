import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

import { Container, Row, Col, Card } from "react-bootstrap";
import "./projects.css";

const projects = [
  {
    title: "Employee Database",
    description:
      "An employee database that allows you to view and manage employees.",
    image: img2,
    link: "https://github.com/justanda",
  },
  {
    title: "Vehicle Generator",
    description:
      "A vehicle generator that allows you to simulate and create vehicles.",
    image: img1,
    link: "https://github.com/justanda/Project-0",
  },
  {
    title: "Penny Pinchers Alpha",
    description:
      "An ecommerce site that allows you to view items and purchase them.",
    image: img3,
    link: "https://github.com/justanda/Project-0",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard for viewing current and forecasted weather.",
    image: img4,
    link: "https://github.com/justanda/Vehicle-Generator-2024",
  },
  {
    title: "Candidate Search",
    description: "A platform for searching and filtering job candidates.",
    image: img5,
    link: "https://github.com/justanda/Candidate-Search",
  },
  {
    title: "Penny Pinchers Alpha (React)",
    description:
      "Refactored to React, this ecommerce site allows you to view items and purchase them.",
    image: img6,
    link: "https://github.com/benjaminmachock/penny-pinchers-dev",
  },
];

function Projects() {
  return (
    <Container className="project-container">
      <h2 className="section-title">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col lg={6} key={index}>
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <Card.Body>
                <Card.Title className="card-title">{project.title}</Card.Title>
                <Card.Text className="card-text">
                  {project.description}
                </Card.Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
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
