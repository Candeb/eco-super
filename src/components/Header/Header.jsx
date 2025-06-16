import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo-eco.png';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({ pedidos: false, contacto: false });
    const [scrolled, setScrolled] = useState(false);


useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);


useEffect(() => {
    if (menuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    // Limpieza por seguridad
    return () => {
        document.body.style.overflow = 'auto';
    };
}, [menuOpen]);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubmenu = (key) => {
        setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
    <div className={`header-container ${scrolled ? 'header-scrolled' : ''}`}>

            <div className='header-logo-container'>
                <img src={logo} alt="" className='header-logo-img' />
            </div>

            <div className='hamburger-icon' onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </div>

            <div className={`header-nav-container ${menuOpen ? 'open' : ''}`}>
                <ul className='header-nav'>
                    <li className='header-nav-links'>
                        <a href="https://chat.whatsapp.com/Hga4GAoIXDIBVnYesxZxah" target="_blank" rel="noopener noreferrer">
                            Ofertas
                        </a>
                    </li>
                    <li
                        className='header-nav-links'
                        onClick={() => {
                            if (window.innerWidth <= 1068) toggleSubmenu('pedidos');
                        }}
                    >

                        Pedidos Online
                        <ul className={`dropdown-menu ${submenuOpen.pedidos ? 'show' : ''}`}>
                            <li>Heladeras y Frezzer</li>
                            <li>Audio y Video</li>
                            <li>Electrodomésticos</li>
                            <li>Ver Todos</li>
                        </ul>
                    </li>
                    <li
                        className='header-nav-links'
                        onClick={() => {
                            if (window.innerWidth <= 1068) toggleSubmenu('contacto');
                        }}
                    >

                        Contacto
                        <ul className={`dropdown-menu ${submenuOpen.contacto ? 'show' : ''}`}>
                            <li>Dónde estamos</li>
                            <li>Atención al cliente</li>
                            <li>
                                <a
                                    href="https://chat.whatsapp.com/Hga4GAoIXDIBVnYesxZxah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Canal de ofertas
                                </a>




                            </li>


                        </ul>
                    </li>
                </ul>

                <div className='social-links-mobile'>

                    <a href="https://wa.me/542604684763" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>

                    <a
                        href="https://www.facebook.com/p/ECO-Supermercado-100063563831062/"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.instagram.com/ecosupermercado.sanrafael/?utm_source=qr&igsh=MWdsY3ZiN2dqbzFkdQ%3D%3D"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>

                </div>

            </div>
        </div>
    );
};

export default Header;
