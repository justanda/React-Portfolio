import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./Footer.css"; // For custom CSS

function Footer() {
  return (
    <footer
      className="footer"
      style={{ textAlign: "center", padding: "20px 0" }}
    >
      <Container
        fluid
        className="bg-body-tertiary"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <Row className="justify-content-center">
          <Col md={12}>
            <h5></h5>
            <Row>
              <Col>
                <p>
                  <img
                    src="https://t3.ftcdn.net/jpg/02/38/96/64/360_F_238966486_A5wEWiRNtuUm85Qxj5BM12hCDNrSS7yS.jpg"
                    alt="Email Logo"
                    style={{ width: "20px", marginRight: "5px" }}
                  />{" "}
                  <a href="mailto:miranda.justin93@gmail.com">
                    miranda.justin93@gmail.com
                  </a>
                </p>
              </Col>

              <Col>
                <p>
                  {""}
                  {/* <strong>LinkedIn:</strong> */}
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <a
                    href="https://www.linkedin.com/in/justin-miranda-014703204/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Justin Miranda
                  </a>
                </p>
              </Col>
              <Col>
                <p>
                  {/* <strong>GitHub:</strong>{" "} */}
                  <img
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    alt="GitHub Logo"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <a
                    href="https://github.com/justanda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    justanda
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
