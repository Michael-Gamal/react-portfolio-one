import React from 'react'
import './footer.css'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Cotact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><FiInstagram /></a>
        <a href="https://instagram"> <FaFacebookF /> </a>
        <a href="https://twitter"> <IoLogoTwitter /> </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; EGATOR Tutorials. All right</small>
      </div>
    </footer>
  )
}

export default Footer