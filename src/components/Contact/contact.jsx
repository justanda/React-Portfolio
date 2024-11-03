import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "./Contact.css"; // For custom CSS

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.email]: e.target.value });
    setFormData({ ...formData, [e.target.message]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={6}>
          <h2>Get In Touch</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                email="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                message="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Contact;
