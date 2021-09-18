import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SkillsSection from "./components/SkillsSection";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Layout>
      <Home />
      <SkillsSection />
      <AboutMe />
    </Layout>
  );
}

export default App;
