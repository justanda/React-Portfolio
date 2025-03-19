import React, { useState } from "react";
import { Container, Button, Row, Col, Modal } from "react-bootstrap";
import { motion } from "framer-motion"; // You'll need to install this
import "./aboutMe.css";
import aboutme from "../../assets/images/aboutme.jpeg";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("story");
  const [showContactModal, setShowContactModal] = useState(false);

  const personalInfo = {
    story: `Hi, I'm Justin! I'm a frontend developer passionate about building intuitive, visually engaging web experiences. I love turning ideas into interactive, responsive interfaces that not only look great but feel seamless to use. With a background in design and development, I focus on creating clean, user-friendly websites that bring brands and ideas to life.`,

    interests: `When I'm not coding, you'll find me skateboarding, exploring new places, or hunting down the best local eats. I'm constantly learning new technologies and techniques to improve my craft, and I enjoy sharing knowledge with the developer community.`,

    journey: `My journey into web development began with my design background, where I developed an eye for aesthetics and user experience. I've since expanded my skillset to include modern frontend frameworks and development practices, allowing me to bring a unique perspective that bridges design and technical implementation.`,

    values: `I believe in creating accessible, inclusive web experiences that serve users of all abilities. I'm committed to writing clean, maintainable code and creating interfaces that are not just visually appealing, but also intuitive and functional. I value collaboration, continuous learning, and delivering projects that exceed expectations.`,
  };

  const techIcons = [
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "npm", icon: "fab fa-npm", color: "#CB3837" },
  ];

  return (
    <Container className="about-me-container">
      <Row className="align-items-center">
        <Col lg={5} className="text-center mb-4 mb-lg-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="profile-image-container"
          >
            <img className="profile-image" src={aboutme} alt="Justin Miranda" />

            <div className="social-icons">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </motion.div>
        </Col>

        <Col lg={7}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-me-content"
          >
            <h1 className="name-title">Justin Miranda</h1>
            <h2 className="profession-subtitle">Frontend Developer</h2>

            <div className="tab-navigation">
              <button
                className={`tab-button ${
                  activeTab === "story" ? "active" : ""
                }`}
                onClick={() => setActiveTab("story")}
              >
                My Story
              </button>
              <button
                className={`tab-button ${
                  activeTab === "journey" ? "active" : ""
                }`}
                onClick={() => setActiveTab("journey")}
              >
                Journey
              </button>
              <button
                className={`tab-button ${
                  activeTab === "values" ? "active" : ""
                }`}
                onClick={() => setActiveTab("values")}
              >
                Values
              </button>
              <button
                className={`tab-button ${
                  activeTab === "interests" ? "active" : ""
                }`}
                onClick={() => setActiveTab("interests")}
              >
                Interests
              </button>
            </div>

            <div className="tab-content">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p>{personalInfo[activeTab]}</p>
              </motion.div>
            </div>

            <div className="tech-stack">
              <h6 className="tech-stack-title">Tech Stack</h6>
              <div className="tech-icons">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="tech-icon-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <i className={tech.icon} style={{ color: tech.color }}></i>
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <Button
                className="resume-button"
                href="https://docs.google.com/document/d/1Co4eJePIo_3j5ZAtFUbz1fvwmZv8qyW1cIy_OqYuWwQ/edit?usp=sharing"
                target="_blank"
                variant="primary"
              >
                <i className="fas fa-file-alt me-2"></i> View Resume
              </Button>

              <Button
                className="contact-button"
                variant="outline-primary"
                onClick={() => setShowContactModal(true)}
              >
                <i className="fas fa-envelope me-2"></i> Contact Me
              </Button>
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* Contact Modal */}
      <Modal
        show={showContactModal}
        onHide={() => setShowContactModal(false)}
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="contact-form">
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="What would you like to discuss?"
              ></textarea>
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default AboutMe;
