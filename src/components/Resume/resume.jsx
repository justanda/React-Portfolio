import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Button,
  Tabs,
  Tab,
  Badge,
} from "react-bootstrap";
import { motion } from "framer-motion";
import "./resume.css";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { skill: "HTML", percentage: 60, category: "Frontend" },
    { skill: "CSS", percentage: 60, category: "Frontend" },
    { skill: "JavaScript", percentage: 50, category: "Frontend" },
    { skill: "React", percentage: 40, category: "Frontend" },
    { skill: "Node.js", percentage: 40, category: "Backend" },
    { skill: "MongoDB", percentage: 30, category: "Backend" },
    { skill: "SQL", percentage: 40, category: "Backend" },
  ];

  const experiences = [
    {
      title: "Senior Graphic Designer",
      location: "Denver, CO",
      period: "2017-Present",
      description:
        "Led digital media campaigns providing customized marketing solutions for real estate professionals.",
      achievements: [
        "Increased client engagement by 40% through innovative design strategies",
        "Managed a portfolio of 25+ high-profile clients",
        "Streamlined design workflow resulting in 30% faster delivery times",
      ],
    },
    {
      title: "Carpenter",
      location: "Denver, CO",
      period: "2015-2020",
      description:
        "Led construction projects requiring precision, collaboration, and adaptability.",
      achievements: [
        "Successfully completed 50+ custom projects",
        "Specialized in sustainable building practices",
        "Managed small teams of 3-5 craftspeople",
      ],
    },
  ];

  const education = [
    {
      institution: "University of Denver",
      program: "Full Stack Web Development",
      year: "2024",
      description:
        "Focus: Web development, software engineering, and Agile methodologies.",
      achievements: [
        "Completed 500+ hours of hands-on coding",
        "Developed 5 full-stack applications",
        "Collaborated on 3 team projects",
      ],
    },
    {
      institution: "Highlands Ranch High School",
      program: "Completed",
      year: "2012",
      description:
        "Focus: General studies, with an emphasis on math and science.",
      achievements: [
        "Honor roll student",
        "Participated in STEM club",
        "Computer science elective focus",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to handle viewing resume
  const handleViewResume = () => {
    // Open Google Doc link in a new tab
    window.open(
      "https://docs.google.com/document/d/1Co4eJePIo_3j5ZAtFUbz1fvwmZv8qyW1cIy_OqYuWwQ/edit?tab=t.0",
      "_blank"
    );
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update active category
  };

  return (
    <Container className="resumeContainer">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4 resume-tabs"
      >
        <Tab eventKey="experience" title="Experience">
          <Row>
            {experiences.map((exp, index) => (
              <Col md={6} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="experience-card mb-4 shadow-sm">
                    <Card.Body>
                      <Card.Title className="cardTitle">{exp.title}</Card.Title>
                      <Card.Subtitle className="cardSubtitle mb-3">
                        <i className="fas fa-map-marker-alt"></i> {exp.location}{" "}
                        | {exp.period}
                      </Card.Subtitle>
                      <Card.Text className="cardText">
                        {exp.description}
                      </Card.Text>
                      <div className="achievements-container">
                        <h6 className="achievements-title">
                          Key Achievements:
                        </h6>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Tab>

        <Tab eventKey="skills" title="Skills">
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="skills-categories mb-4">
                <Badge
                  pill
                  bg={activeCategory === "All" ? "primary" : "light"}
                  className={`category-badge ${
                    activeCategory === "All" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("All")}
                >
                  All
                </Badge>
                <Badge
                  pill
                  bg={activeCategory === "Frontend" ? "primary" : "light"}
                  className={`category-badge frontend ${
                    activeCategory === "Frontend" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("Frontend")}
                >
                  Frontend
                </Badge>
                <Badge
                  pill
                  bg={activeCategory === "Backend" ? "primary" : "light"}
                  className={`category-badge backend ${
                    activeCategory === "Backend" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick("Backend")}
                >
                  Backend
                </Badge>
              </div>

              {skills
                .filter(
                  (skill) =>
                    activeCategory === "All" ||
                    skill.category === activeCategory
                )
                .map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Row className="skill-row align-items-center mb-3">
                      <Col md={3} className="skill-name">
                        <span>{skill.skill}</span>
                        <small className="text-muted d-block">
                          {skill.category}
                        </small>
                      </Col>
                      <Col md={9}>
                        <ProgressBar
                          className="progress-bar-animated"
                          now={skill.percentage}
                          label={`${skill.percentage}%`}
                          variant={skill.percentage > 50 ? "success" : "info"}
                        />
                      </Col>
                    </Row>
                  </motion.div>
                ))}
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="education" title="Education">
          <Row>
            {education.map((edu, index) => (
              <Col md={6} key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="education-card mb-4 shadow-sm">
                    <Card.Body className="cardBody">
                      <Card.Title className="cardTitle">
                        {edu.institution}
                      </Card.Title>
                      <Card.Subtitle className="mb-2">
                        {edu.program}
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-3 text-muted">
                        {edu.year}
                      </Card.Subtitle>
                      <Card.Text>{edu.description}</Card.Text>
                      <div className="achievements-container">
                        <h6 className="achievements-title">Highlights:</h6>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>

      <Row className="text-center mt-4">
        <Col>
          <Button
            className="downloadButton"
            onClick={handleViewResume}
            size="lg"
            variant="primary"
          >
            <i className="fas fa-eye me-2"></i>
            View Full Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
