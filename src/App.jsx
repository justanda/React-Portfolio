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
``;
import "./App.css";

// import ContactPage from "./pages/contact";

function App() {
  const isHomePage = window.location.pathname === "/";
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  const isMobile = window.innerWidth <= 768;
  const isDesktop = window.innerWidth > 1024;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const isLandscape = window.innerWidth > window.innerHeight;
  const isPortrait = window.innerWidth < window.innerHeight;
  const isRetina = window.devicePixelRatio > 1;
  const isHighDPI = window.devicePixelRatio > 1;
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(navigator.userAgent);
  const isWindows = /Win/.test(navigator.platform);
  const isMac = /Mac/.test(navigator.platform);

  React.useEffect(() => {
    const handleResize = () => {
      console.log("Window resized. Current width:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {!isHomePage && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/travels" element={<Travels />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        {!isHomePage && <Footer />}
      </div>
    </Router>
  );
}

export default App;
