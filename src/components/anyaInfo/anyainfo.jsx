import React from 'react';
import './anyainfo.css';
import Back from '../../images/BackgroundRM.png';
import Ecom from '../../images/ecommercestore.png';
import FireChat from '../../images/Firbasechatapp.png';
import GoogleMapAPI from '../../images/GoogleMapAPI.png';
import Lulu from '../../images/lulusnativekitchen.png';
import WebBlog from '../../images/WebBlog.png';
import Pdf from '../../images/PdfAnalysis.png';


const mainPage = () => {
  return (
    <>
    <header>
        <nav>

        </nav>
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
                  <img src={Pdf} alt="Project 1" />
                  <p>PDF Analysis - Gemini API</p>
                </div>

                <div className="feature-card">
                  <img src={Back} alt="Project 1" />
                  <p>Background Removal - API Tool</p>
                </div>

                <div className="feature-card">
                   <img src={WebBlog} alt="Project 1" />
                   <p>Web Blog - MERN Stack</p>
                </div>

                <div className="feature-card">
                    <img src={FireChat} alt="Project 1" />
                    <p>Firebase Chat App - Real-time Messaging</p>
                </div>

                <div className="feature-card">
                   <img src={GoogleMapAPI} alt="Project 1" />
                   <p>Google Map API - Location Services</p>
                </div>

                <div className="feature-card">
                    <img src={Lulu} alt="Project 1" />
                    <p>Lulu's Native Kitchen - Food Ordering Service</p>
                </div>

                 <div className="feature-card">
                   <img src={Ecom} alt="Project 1" />
                   <p>E-commerce Store - Online Shopping Platform</p>
                </div>

            </div>
        </section>
        </>

  );
}

export default mainPage;

// const WeatherApp = () => { -----you can add more functionality here