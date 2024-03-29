import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SkillsSection from "./components/SkillsSection";
import AboutMe from "./components/AboutMe";
import MyPublishedVideos from "./components/MyPublishedVideos";
import MyProjects from "./components/MyProjects";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <Layout>
        <Home />
        <Experience />
        <SkillsSection />
        <AboutMe />
        <MyProjects />
        <MyPublishedVideos />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;
