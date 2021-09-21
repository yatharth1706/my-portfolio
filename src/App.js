import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SkillsSection from "./components/SkillsSection";
import AboutMe from "./components/AboutMe";
import MyPublishedVideos from "./components/MyPublishedVideos";
import MyIllustrations from "./components/MyIllustrations";
import MyProjects from "./components/MyProjects";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Home />
        <SkillsSection />
        <AboutMe />
        <MyProjects />
        <MyPublishedVideos />
        <MyIllustrations />
      </Layout>
    </Router>
  );
}

export default App;
