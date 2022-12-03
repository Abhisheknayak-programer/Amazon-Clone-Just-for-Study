import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to to-transparent bottom-0 z-20" />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/810Jo9IhfsL._SX3000_.jpg"
            alt="demo image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51AQhraI0-L._SX3000_.png"
            alt="demo image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61mZ60Ci3YL._SX3000_.jpg"
            alt="demo image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg"
            alt="demo image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg"
            alt="demo image"
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg"
            alt="demo image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
