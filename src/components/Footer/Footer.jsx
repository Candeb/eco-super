import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo-eco.png';


const Footer = () => {
    return (
        <>



            <div className="footer">
                <div className="footer-left">

                    <div className="footer-info">
                        <p><strong>ECO Supermercados San Rafael</strong></p>
                        <ul className="footer-links">
                            <li><a href="#">Ofertas</a></li>
                            <li><a href="#">Pedidos Online</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>


                    </div>



                </div>



                <div className="footer-right">
                    <img
                        src={logo}
                        alt="Eco Supermercados San Rafael"
                        className="footer-logo"
                    />

                </div>


            </div>

            <div className='footer-end'>
                <p>¿Necesitas ayuda? Visita <a href="#">Atención al Cliente</a> o comunicate por{' '}
                    <a href="#">WhatsApp</a>
                    
                </p>
                <span>
                    © 2025 ECO Supermercado. Todos los derechos reservados.
                </span>
            </div>
        </>

    );
};

export default Footer;
