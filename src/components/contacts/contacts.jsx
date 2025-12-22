import React, { useRef } from 'react';
import './contacts.css';
import { FiMail, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_0gou2tz', 'template_top5g5l', form.current, 'gVwhyHj6d4Xru-SfF')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email send error:', error.text);
        alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Let's build something great together</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:chuksanyaanya@gmail.com" className="contact-item">
            <FiMail />
            <div>
              <h4>Email</h4>
              <span>chuksanyaanya@gmail.com</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/anya-anya-96100919a/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FiLinkedin />
            <div>
              <h4>LinkedIn</h4>
              <span>Anya Chukwudi Anya</span>
            </div>
          </a>

          {/* <a href="https://api.whatsapp.com/send?phone=+2348020352170" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaWhatsapp />
            <div>
              <h4>WhatsApp</h4>
              <span>+1 236 975 2649</span>
            </div>
          </a> */}
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">
            <FiSend />
            Send Message
          </button>
        </form>
      </div>

      <footer className="footer">
        <p>© 2024 Anya Anya. Built with React.</p>
      </footer>
    </section>
  );
};

export default Contact;
