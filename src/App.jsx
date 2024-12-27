import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import AboutMe from "./components/About me/aboutMe";
import Projects from "./pages/work";
import Home from "./pages/home";
import ResumePage from "./pages/resume";
import "bootstrap/dist/css/bootstrap.min.css";
import Travels from "./pages/travels";

function App() {
  const isHomePage = window.location.pathname === "/";

  return (
    <Router>
      {/* <div className="App"> */}
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      {!isHomePage && <Footer />}
      {/* </div> */}
    </Router>
  );
}

export default App;
