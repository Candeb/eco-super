import React from 'react';
import './About.css'; import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { FaRegCreditCard } from "react-icons/fa";
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import visa from "../../assets/payments-slider/1.png"
import mastercard from "../../assets/payments-slider/2.png"
import mp from "../../assets/payments-slider/3.png"


const imageUrls = [
   
    visa,
    visa,
    visa
];

const About = () => {
    return (
        <div className="about-container">

            {/* Ubicación */}
            <section className="about-section location-section">
                <h2 className="about-title"> <FaMapMarkerAlt /> Dónde estamos</h2>
                <div className="map-wrapper">
                    <iframe
                        className="map-iframe"
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1077383540826!2d-122.42067908468154!3d37.77655427975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b0f433dcd%3A0x7a0f1b7806b56fc6!2sCity%20Hall%2C%20San%20Francisco%2C%20CA!5e0!3m2!1ses!2sus!4v1622123456789"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Formas de Pago */}
            <section className="about-section payment-section">
                <h2 className="about-title"> <FaRegCreditCard /> Medios de pago</h2>
                   
                                  <ImageCarousel images={imageUrls} />

            </section>

            {/* Horarios */}
            <section className="about-section schedule-section">
                <h2 className="about-title"> <FaRegClock /> Horarios</h2>
                <div className="schedule-table">
                    <div className="schedule-row">
                        <span className="day">Lunes a Sábado</span>
                        <span className="hours">8:30 - 21:00</span>
                    </div>
                    <div className="schedule-row">
                        <span className="day">Domingo</span>
                        <span className="hours">9:00 - 13:00</span>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
