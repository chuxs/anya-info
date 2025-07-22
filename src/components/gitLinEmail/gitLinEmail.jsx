import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
// import { FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
// import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anya-anya-96100919a/" target=''> <LuLinkedin/> </a>
        <a href="https://github.com/chuxs" target=''> <FiGithub/> </a>
        <a href="mailto:chuksanyaanya@gmail.com" target=''> <SiGmail/> </a>
    </div>
  )
}

export default HeaderSocials