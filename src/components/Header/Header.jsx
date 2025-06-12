import React from 'react'
import logo from '../../assets/logo-eco.png';
import "./Header.css"


const Header = () => {
    return (
        <div className='header-container'>

            <div className='header-logo-container'>
                <img src={logo} alt="" className='header-logo-img' />
            </div>

            <div className='header-nav-container'>
                <ul className='header-nav'>
                    <li className='header-nav-links'>
                         <a
                                    href="https://chat.whatsapp.com/Hga4GAoIXDIBVnYesxZxah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ofertas
                                </a>
 
                    </li>
                    <li className='header-nav-links'>
                        Pedidos Online
                        <ul className='dropdown-menu'>
                            <li>Supermercado</li>
                            <li>Verdulería</li>
                            <li>Panadería</li>
                        </ul>
                    </li>
                    <li className='header-nav-links'>
                        Contacto
                        <ul className='dropdown-menu'>

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
    )
}

export default Header