import React from "react";
import Projects from "../components/Projects/projects.jsx";
import { Row } from "react-bootstrap";

const porfolioPage = () => {
  return (
    <section id="work" className="work">
      <Row className="text-center"></Row>
      <Projects />
    </section>
  );
};
export default porfolioPage;
