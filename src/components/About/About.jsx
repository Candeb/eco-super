import React from 'react';
import './About.css'; import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import visa from "../../assets/payments-slider/1.png"
import mastercard from "../../assets/payments-slider/2.png"
import mp from "../../assets/payments-slider/3.png"
import naranja from "../../assets/payments-slider/naranja.png"


const imageUrls = [
  { src: naranja, text: "Naranja X" },
  { src: visa, text: "Visa" },

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
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3282.87720941509!2d-68.31680392425851!3d-34.632543172944004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDM3JzU3LjIiUyA2OMKwMTgnNTEuMiJX!5e0!3m2!1ses!2sar!4v1750027607319!5m2!1ses!2sar"
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
