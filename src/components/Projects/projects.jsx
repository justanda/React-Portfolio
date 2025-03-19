import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion"; // Using framer-motion like in AboutMe
import "./projects.css";

// Import images
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

const projects = [
  {
    id: 1,
    title: "Candidate Search",
    description:
      "A platform for searching and filtering job candidates built with React.",
    image: img5,
    link: "https://candidate-search-1-e6n1.onrender.com",
    github: "https://github.com/justanda/candidate-search",
    category: "Web App",
    technologies: ["React", "JavaScript", "Bootstrap", "RESTful API"],
    featured: true,
  },

  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard for viewing current and forecasted weather data with location search.",
    image: img4,
    link: "https://weathermangenerator.onrender.com",
    github: "https://github.com/justanda/weather-dashboard",
    category: "Web App",
    technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
    featured: true,
  },
  {
    id: 3,
    title: "Three.js Portfolio",
    description:
      "Interactive portfolio built with Three.js, showcasing my projects in a 3D environment.",
    image: img3,
    link: "https://justinthreeport.netlify.app/index.html",
    github: "https://github.com/justanda/threePortfolio",
    category: "3D Visualization",
    technologies: ["Three.js", "JavaScript", "WebGL", "HTML5/CSS3"],
    featured: true,
  },
  {
    id: 4,
    title: "Penny Pinchers Ecommerce",
    description:
      "Refactored JS app to React. An ecommerce platform for buying and selling items with user authentication.",
    image: img6,
    link: "https://github.com/benjaminmachock/penny-pinchers-dev",
    github: "https://github.com/benjaminmachock/penny-pinchers-dev",
    category: "Web App",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    id: 5,
    title: "Employee Database",
    description:
      "Command line application for managing employee data with CRUD operations and reporting.",
    image: img2,
    link: "https://github.com/justanda",
    github: "https://github.com/justanda",
    category: "Backend",
    technologies: ["Node.js", "MySQL", "Inquirer", "CLI"],
    featured: false,
  },
  {
    id: 6,
    title: "Vehicle Generator",
    description:
      "Command line application that simulates and creates vehicles with customizable attributes.",
    image: img1,
    link: "https://github.com/justanda/Project-0",
    github: "https://github.com/justanda/Project-0",
    category: "Backend",
    technologies: ["Node.js", "JavaScript", "OOP", "CLI"],
    featured: false,
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleModal, setVisibleModal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories for the filter
  const categories = ["All", ...new Set(projects.map((item) => item.category))];

  // Handle filter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(
        projects.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.technologies.some((tech) =>
              tech.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
      );
    } else {
      setFilteredProjects(
        projects.filter(
          (item) =>
            item.category === activeFilter &&
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              item.technologies.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
              ))
        )
      );
    }
  }, [activeFilter, searchTerm]);

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container className="projects-container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">Explore my recent work</p>
      </motion.div>

      <div className="projects-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        <div className="filter-buttons">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`filter-button ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="projects-grid"
      >
        <Row>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Col lg={6} md={6} sm={12} key={project.id} className="mb-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="h-100"
                >
                  <Card className="project-card h-100">
                    <div className="project-image-container">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <Button
                          variant="light"
                          className="view-details-btn"
                          onClick={() => setVisibleModal(project.id)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="project-title">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="project-description">
                        {project.description}
                      </Card.Text>

                      <div className="project-tech-stack">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                    <Card.Footer className="project-footer">
                      {project.link && project.link !== project.github ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo-link"
                        >
                          <i className="fas fa-external-link-alt me-1"></i> Live
                          Demo
                        </a>
                      ) : null}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <i className="fab fa-github me-1"></i> GitHub
                      </a>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))
          ) : (
            <Col className="text-center no-results">
              <i className="fas fa-search fa-3x mb-3"></i>
              <h4>No projects found</h4>
              <p>Try adjusting your search or filter criteria</p>
              <Button
                variant="primary"
                onClick={() => {
                  setActiveFilter("All");
                  setSearchTerm("");
                }}
              >
                Reset Filters
              </Button>
            </Col>
          )}
        </Row>
      </motion.div>

      {/* Project Details Modal */}
      {filteredProjects.map((project) => (
        <motion.div
          key={project.id}
          className={`project-modal-backdrop ${
            visibleModal === project.id ? "active" : ""
          }`}
          onClick={(e) => {
            if (e.target.classList.contains("project-modal-backdrop")) {
              setVisibleModal(null);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: visibleModal === project.id ? 1 : 0,
            pointerEvents: visibleModal === project.id ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="project-modal-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: visibleModal === project.id ? 0 : 50,
              opacity: visibleModal === project.id ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setVisibleModal(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="modal-project-image"
              />
            </div>

            <div className="modal-project-details">
              <h2 className="modal-project-title">{project.title}</h2>
              <p className="modal-project-description">{project.description}</p>

              <h4 className="modal-section-title">Technologies Used</h4>
              <div className="modal-tech-badges">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="modal-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="modal-project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-project-button demo-button"
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-project-button github-button"
                >
                  <i className="fab fa-github me-2"></i>
                  View Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </Container>
  );
}

export default Projects;
