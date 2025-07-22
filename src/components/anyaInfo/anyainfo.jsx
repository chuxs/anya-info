import React from 'react';
import './anyainfo.css';
import GitLinEmail from '../gitLinEmail/gitLinEmail.jsx';
import Back from '../../images/BackgroundRM.png';
import Ecom from '../../images/ecommercestore.png';
import FireChat from '../../images/Firbasechatapp.png';
import GoogleMapAPI from '../../images/GoogleMapAPI.png';
import Lulu from '../../images/lulusnativekitchen.png';
import WebBlog from '../../images/WebBlog.png';
import Pdf from '../../images/PdfAnalysis.png';
// import { FaLinkedin } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
// import { FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
// import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";


const mainPage = () => {
  return (
    <>
    <header>
        <nav>
        <a className='gitlinem' href="https://www.linkedin.com/in/anya-anya-96100919a/" target=''> <LuLinkedin/> </a>
        <a className='gitlinem' href="https://github.com/chuxs" target=''> <FiGithub/> </a>
        <a className='gitlinem' href="mailto:chuksanyaanya@gmail.com" target=''> <SiGmail/> </a>
        </nav>
        <GitLinEmail />
    </header>
        <section id="home" class="hero">
            
            <p>Hello I am</p>
            <h1>Anya Anya</h1>
            <p>FullStack Developer</p>
            <div className='buttons-container'>
              <button className="cv-btn"><a href="#features">Resume</a></button>
              
              <button className="cta-btn"><a href="#projects">Projects</a></button>
              
              <button className="contact-btn"><a href="#features">Contact Me</a></button>
            </div>
            
        </section>

        <section className="features" id="projects">
          <h2>Projects</h2>   
            <div className="feature-grid">

                <div className="feature-card">
                  <img src={Pdf} alt="PDF Analysis - Gemini API" />
                  <p>PDF Analysis - Gemini API</p>
                </div>

                <div className="feature-card">
                  <img src={Back} alt="Background Removal - API Tool" />
                  <p>Background Removal - API Tool</p>
                </div>

                <div className="feature-card">
                   <img src={WebBlog} alt="Web Blog - MERN Stack" />
                   <p>Web Blog - MERN Stack</p>
                </div>

                <div className="feature-card">
                    <img src={FireChat} alt="Firebase Chat App - Real-time Messaging" />
                    <p>Firebase Chat App - Real-time Messaging</p>
                </div>

                <div className="feature-card">
                   <img src={GoogleMapAPI} alt="Google Map API - Location Services" />
                   <p>Google Map API - Location Services</p>
                </div>

                <div className="feature-card">
                    <img src={Lulu} alt="Lulu's Native Kitchen - Food Ordering Service" />
                    <p>Lulu's Native Kitchen - Food Ordering Service</p>
                </div>

                 <div className="feature-card">
                   <img src={Ecom} alt="E-commerce Store - Online Shopping Platform" />
                   <p>E-commerce Store - Online Shopping Platform</p>
                </div>

            </div>
        </section>
        </>

  );
}

export default mainPage;

// const WeatherApp = () => { -----you can add more functionality here