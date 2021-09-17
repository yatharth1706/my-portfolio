import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <Layout>
      <Home />
      <SkillsSection />
    </Layout>
  );
}

export default App;
