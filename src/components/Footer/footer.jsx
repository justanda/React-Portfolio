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
        // className="bg-body-tertiary"
        style={{ maxWidth: "800px", margin: "0 auto" }}
        background-color="transparent"
      >
        <Row className="justify-content-center">
          <Col md={12}>
            <h5></h5>
            <Row>
              <Col>
                <p>
                  <a href="mailto:miranda.justin93@gmail.com">
                    <img
                      src="https://t3.ftcdn.net/jpg/02/38/96/64/360_F_238966486_A5wEWiRNtuUm85Qxj5BM12hCDNrSS7yS.jpg"
                      alt="Email Logo"
                      style={{ width: "50px", marginRight: "50px" }}
                    />
                  </a>
                </p>
              </Col>

              <Col>
                <p>
                  {""}
                  {/* <strong>LinkedIn:</strong> */}

                  <a
                    href="https://www.linkedin.com/in/justin-miranda-014703204/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo-700x394.png"
                      style={{ width: "50px", marginRight: "50px" }}
                    />
                  </a>
                </p>
              </Col>
              <Col>
                <p>
                  {/* <strong>GitHub:</strong>{" "} */}

                  <a
                    href="https://github.com/justanda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                      alt="GitHub Logo"
                      style={{ width: "50px", marginRight: "50px" }}
                    />{" "}
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
