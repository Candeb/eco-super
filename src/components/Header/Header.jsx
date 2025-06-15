import React, { useState } from 'react';
import logo from '../../assets/logo-eco.png';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState({ pedidos: false, contacto: false });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubmenu = (key) => {
        setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className='header-container'>
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
            </div>
        </div>
    );
};

export default Header;
