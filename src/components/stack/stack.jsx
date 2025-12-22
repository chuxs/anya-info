import React from 'react';
import './stack.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoFirebase } from 'react-icons/io5';
import { SiPostman, SiMongodb, SiExpress, SiVercel, SiElectron, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Firebase', icon: IoLogoFirebase, color: '#FFCA28' },
  { name: 'Azure', icon: VscAzure, color: '#0078D4' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Electron', icon: SiElectron, color: '#47848F' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

const Stack = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies I work with</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <skill.icon style={{ color: skill.color }} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
