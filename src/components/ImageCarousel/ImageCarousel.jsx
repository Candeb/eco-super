import React, { useRef, useEffect, useState } from "react";
import "./ImageCarousel.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const startScroll = (direction = "right") => {
        if (scrollIntervalRef.current) return;
        scrollIntervalRef.current = setInterval(() => {
            if (!carouselRef.current) return;
            const scrollAmount = direction === "left" ? -1 : 1;
            carouselRef.current.scrollLeft += scrollAmount;
        }, 10);
    };

    const stopScroll = () => {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
    };

    const handleImageHover = (hovering) => {
        setIsPaused(hovering);
        if (hovering) stopScroll();
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const midpoint = carousel.scrollWidth / 3;

        // Inicialmente posicionamos al medio
        carousel.scrollLeft = midpoint;

        const handleScroll = () => {
            const maxScroll = carousel.scrollWidth;
            if (carousel.scrollLeft <= 0) {
                carousel.scrollLeft = midpoint;
            } else if (carousel.scrollLeft + carousel.offsetWidth >= maxScroll) {
                carousel.scrollLeft = midpoint - carousel.offsetWidth;
            }
        };

        carousel.addEventListener("scroll", handleScroll);
        return () => {
            carousel.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Triplicamos las imágenes para simular infinito en ambas direcciones
    const infiniteImages = [...images, ...images, ...images];

    return (
        <div className="carousel-container">
            <div
                className="arrow left-arrow"
                onMouseEnter={() => !isPaused && startScroll("left")}
                onMouseLeave={stopScroll}
            >
                <IoIosArrowBack />
            </div>

            <div className="carousel-track" ref={carouselRef}>
                {infiniteImages.map((item, idx) => {
                    const imageSrc = typeof item === "string" ? item : item.src;
                    const imageText = typeof item === "object" && item.text ? item.text : null;
                    const icon = typeof item === "object" && item.icon ? item.icon : null;
                    const url = typeof item === "object" && item.url ? item.url : null;

                    const content = (
                        <div
                            className="carousel-image-wrapper"
                            onMouseEnter={() => handleImageHover(true)}
                            onMouseLeave={() => handleImageHover(false)}
                        >
                            {icon ? (
                                <div className="carousel-icon">{icon}</div>
                            ) : (
                                <img src={imageSrc} alt={`carousel-${idx}`} className="carousel-image" />
                            )}
                        </div>
                    );

                    return (
                        <div className="carousel-card-image" key={idx}>
                            {url ? (
                                <a href={url} className="carousel-link">
                                    {content}
                                </a>
                            ) : (
                                content
                            )}
                            {imageText && <div className="carousel-image-text">{imageText}</div>}
                        </div>
                    );
                })}


            </div>

            <div
                className="arrow right-arrow"
                onMouseEnter={() => !isPaused && startScroll("right")}
                onMouseLeave={stopScroll}
            >
                <IoIosArrowForward />
            </div>
        </div>
    );
};

export default ImageCarousel;
