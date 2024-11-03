import React from "react";
import AboutMe from "../components/About me/aboutMe.jsx";
import { Card, Container, Row } from "react-bootstrap";

const homePage = () => {
  return (
    <Container>
      <Card>
        <section id="home" className="home">
          <Row>
            {/* <h1 class="text-center"> Justin Miranda Portfolio</h1> */}
          </Row>
          {/* <p className="text-center">
            I’m a full-stack developer with a passion for building web
            applications.
          </p> */}
          <AboutMe />
        </section>
      </Card>
    </Container>
  );
};

export default homePage;
