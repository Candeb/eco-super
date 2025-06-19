import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo-eco.png';


const Footer = () => {
    return (




        <div className="footer">
            <div className='footer-content'>
                <div className="footer-left">

                    <div className="footer-info">
                        <p> ECO Supermercado </p>
                        <p>Av. Juan B. Alberdi 1405</p>
                        <p>San Rafael, Mendoza </p>

                        <div className="footer-socials">
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

                            <a href="https://wa.me/542604684763" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>


                    </div>



                </div>



                <div className="footer-right">
                    <img
                        src={logo}
                        alt="Eco Supermercados San Rafael"
                        className="footer-logo"
                        onClick={() => {
                            const home = document.getElementById("home");
                            if (home) home.scrollIntoView({ behavior: "smooth" });
                        }}
                    />

                </div>


            </div>

            <div className='footer-end'>
                <p>¿Necesitas ayuda? Visita nuestro   {' '}
                    <a href="https://chat.whatsapp.com/Hga4GAolXDIBVnYesxZxah" target="_blank" rel="noopener noreferrer">
                        Grupo de ofertas
                    </a>

                 {' '}   o comunicate por{' '}
                    <a href="https://wa.me/542604684763" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                    </a>


                </p>
                <span>
                    © 2025 ECO Supermercado. Todos los derechos reservados.
                </span>
            </div>

        </div>

    );
};

export default Footer;
