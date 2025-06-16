import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a 
        href="https://www.facebook.com/p/ECO-Supermercado-100063563831062/" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a 
        href="https://www.instagram.com/ecosupermercado.sanrafael/?utm_source=qr&igsh=MWdsY3ZiN2dqbzFkdQ%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a 
        href="https://wa.me/542604684763" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialBar;
