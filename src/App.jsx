import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import AboutMe from "./components/About me/aboutMe";
import ContactPage from "./pages/contact";
import Projects from "./pages/work";
import Home from "./pages/home";
import ResumePage from "./pages/resume";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
