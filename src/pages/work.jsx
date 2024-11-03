import React from "react";
import Projects from "../components/Projects/projects.jsx";
import { Row } from "react-bootstrap";

const porfolioPage = () => {
  return (
    <section id="work" className="work">
      <Row className="text-center">
        <h2>Projects</h2>
      </Row>
      <Projects />
    </section>
  );
};
export default porfolioPage;
