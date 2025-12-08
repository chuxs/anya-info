import './App.css';
import AnyaInfo from './components/anyaInfo/anyainfo';
import Stack from './components/stack/stack';
import Contact from './components/contacts/contacts';
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

function App() {
  return (
    <div className="App">
      {/* Fixed Navigation */}
      <nav className="nav">
        <span className="nav-logo">AA</span>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-socials">
          <a href="https://www.linkedin.com/in/anya-anya-96100919a/" target="_blank" rel="noopener noreferrer">
            <LuLinkedin />
          </a>
          <a href="https://github.com/chuxs" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="mailto:chuksanyaanya@gmail.com">
            <SiGmail />
          </a>
        </div>
      </nav>

      <AnyaInfo />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
