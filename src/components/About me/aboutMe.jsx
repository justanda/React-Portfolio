// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import "./AboutMe.css";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import resume from "../../assets/resume.pdf";

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <section style={{ marginTop: 20 }}>
            <h2>About Me</h2>
            <p>
              leorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, est erat fermentum arcu,
              sit amet finibus arcu ex nec libero. Nullam nec dui sed elit
              bibendsum varius. Nulla facilisi. Donec nec quam eu elit fermentum
              fermentum. Nulla facilisi. Donec nec quam eu elit fermentum fermen
              tum. Nulla
            </p>
          </section>

          <Button
            style={{ marginTop: 20 }}
            target="_blank"
            href="https://docs.google.com/document/d/1ySToPSqwfbvpZFY11vNxtcJ0_a_5z47XYVY_jJNYDnA/edit?usp=sharing"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </Col>
        <Col md={6}>
          <img
            style={{
              boxShadow: "0 0 20px 0 rgba(0, 0, 98, 0.2)",
              display: "block",
              flexWrap: "wrap",
              width: "500px",
              height: "550px",
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              // borderRadius: -20,
            }}
            src="https://scontent-den2-1.xx.fbcdn.net/v/t1.6435-9/120754393_4659579734114098_8147633671436053647_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_ohc=1dj9JsuV1eoQ7kNvgGkJsZJ&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=ADwwf0xD4P1Oq6iMcmdk2hS&oh=00_AYDevoOvV1ETpv7NhGV3N8NxYEjnNpiQRvm6xoWr80v2_A&oe=674E4960"
            alt="Justin 
          Miranda"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
