import React, { useState } from 'react';
import "../css/Carrousel.css";
import { AdvancedImage } from "@cloudinary/react";
import {
  slide1,
  slide3,
  slide4,
  slider2
} from "../images/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carrousel() {
  const [hoveredImage, setHoveredImage] = useState(null);
  return (
    <div className="section">
      <div className="parent-container">
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showIndicators={false}
          showStatus={false}
        >
          <div className="custom-carousel">
            <AdvancedImage
              style={{ height: "70vh", objectFit: "cover" }}
              cldImg={slide1}
            />
          </div>
          <div className="custom-carousel">
            <AdvancedImage
              style={{ height: "70vh", objectFit: "cover" }}
              cldImg={slide3}
            />
          </div>
          <div className="custom-carousel">
            <AdvancedImage
              style={{ height: "70vh", objectFit: "cover" }}
              cldImg={slider2}
            />
          </div>
          <div className="custom-carousel">
            <AdvancedImage
              style={{ height: "70vh", objectFit: "cover" }}
              cldImg={slide4}
            />
          </div>
        </Carousel>
      </div>
      <div className="color">
        <img
          src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698857921/IMG-20231003-WA0047_lm3ppa.jpg"
          alt=""
          width={hoveredImage === 1 ? 500 : 100}
          height={hoveredImage === 1 ? 500 : 100}
          onMouseEnter={() => setHoveredImage(1)}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <img
          src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698858049/IMG-20231003-WA0044_ealgef.jpg"
          alt=""
          width={hoveredImage === 2 ? 500 : 100}
          height={hoveredImage === 2 ? 500 : 100}
          onMouseEnter={() => setHoveredImage(2)}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <img
          src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698912996/IMG-20231003-WA0117_hg6dom.jpg"
          alt=""
          width={hoveredImage === 3 ? 500 : 100}
          height={hoveredImage === 3 ? 500 : 100}
          onMouseEnter={() => setHoveredImage(3)}
          onMouseLeave={() => setHoveredImage(null)}
        />
        {/* <div className="dive-color"></div> */}
      </div>
    </div>
  );
}

export default Carrousel;
