import React from "react";
import "./anyainfo.css";
import Back from "../../images/BackgroundRM.png";
import Ecom from "../../images/ecommercestore.png";
import FireChat from "../../images/Firbasechatapp.png";
import GoogleMapAPI from "../../images/GoogleMapAPI.png";
import Lulu from "../../images/lulusnativekitchen.png";
import WebBlog from "../../images/WebBlog.png";
import Pdf from "../../images/PdfAnalysis.png";
import Crypto from "../../images/CryptoDash.png";
import Posture from "../../images/Posture.png";
import TutorBid from "../../images/TutorBid.png";
import { HiArrowDown } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import CvResume from "../../cv/ANYA RESUME.pdf";

const projects = [
  {
    title: "TutorBid",
    desc: "A platform for students to find tutors and for tutors to find students",
    img: TutorBid,
    link: "http://tutor-bid.azurewebsites.net/",
    technologies: ["EJS", "Node.js", "Express", "Firebase DB", "Azure"],
  },
  {
    title: "Posture Monitoring Software - Beta (Electron JS)",
    desc: "Real-time posture monitoring system using TensorFlow.js",
    img: Posture,
    link: "https://github.com/chuxs/Pose-Detection/tree/alternativePoseModel",
    technologies: ["Electron", "JavaScript", "Node.js", "TensorFlow.js"],
  },
  {
    title: "PDF Analysis",
    desc: "AI-powered document analyzer using Gemini API",
    img: Pdf,
    link: "https://pdf-ai-analyzer-gamma.vercel.app/",
    technologies: ["EJS", "Node.js", "JavaScript", "Gemini API", "Vercel"],
  },
  {
    title: "Crypto Tracker",
    desc: "Real-time cryptocurrency dashboard",
    img: Crypto,
    link: "https://anya-crypto-app.vercel.app/",
    technologies: ["EJS", "Node.js", "JavaScript", "Vercel"],
  },
  {
    title: "Background Remover",
    desc: "Remove backgrounds from images instantly",
    img: Back,
    link: "https://anya-background-remover.vercel.app/",
    technologies: ["EJS", "Node.js", "JavaScript", "Vercel"],
  },
  {
    title: "Web Blog",
    desc: "Simple Blogging Website (Firebase)",
    img: WebBlog,
    link: "https://anya-blog.vercel.app/",
    technologies: ["EJS", "Node.js", "Firebase", "Vercel"],
  },
  {
    title: "Firebase Chat",
    desc: "Real-time messaging application",
    img: FireChat,
    link: "https://basic-chat-app-theta.vercel.app/",
    technologies: ["JavaScript", "Firebase", "Vercel"],
  },
  {
    title: "Google Maps",
    desc: "Interactive location services",
    img: GoogleMapAPI,
    link: "https://anya-map-project.vercel.app/",
    technologies: ["Node.js", "JavaScript", "Google Maps API", "Vercel"],
  },
  {
    title: "Lulu's Kitchen",
    desc: "Food ordering platform (client-side JavaScript)",
    img: Lulu,
    link: "https://lulusnativekitchen.vercel.app/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
  },
  {
    title: "E-commerce Store",
    desc: "Online shopping platform",
    img: Ecom,
    link: "https://chux-store.vercel.app/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
  },
];

const MainPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Anya Anya</h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-desc">
            I build clean, efficient web applications with modern technologies.
          </p>
          <div className="hero-buttons">
            <a
              href={CvResume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        <a href="#projects" className="scroll-indicator">
          <HiArrowDown />
        </a>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
          <p>A selection of my recent work</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={index}
            >
              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <FiExternalLink />
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainPage;
