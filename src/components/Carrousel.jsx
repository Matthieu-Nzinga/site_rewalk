import React from "react";
import "../css/Carrousel.css";
import { AdvancedImage } from "@cloudinary/react";
import {
  one,
  slide1,
  slide3,
  slide4,
  slider2,
  theer,
  two,
} from "../images/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carrousel() {
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
              style={{ width: "80%", objectFit: "cover" }}
              cldImg={slide1}
            />
          </div>
          <div className="custom-carousel">
            <AdvancedImage
              style={{ width: "80%", objectFit: "cover" }}
              cldImg={slide3}
            />
          </div>
          <div className="custom-carousel">
            <AdvancedImage
              style={{ width: "80%", objectFit: "cover" }}
              cldImg={slider2}
            />
          </div>
          <div className="custom-carousel">
            <AdvancedImage
              style={{ width: "80%", objectFit: "cover" }}
              cldImg={slide4}
            />
          </div>
        </Carousel>
      </div>
      <div className="color">
        <div>
          <AdvancedImage
            style={{ height: "70vh", objectFit: "cover" }}
            cldImg={one}
          />
        </div>
        <div>
          <AdvancedImage
            style={{ height: "70vh", objectFit: "cover" }}
            cldImg={two}
          />
        </div>
        <div>
          <AdvancedImage
            style={{ height: "70vh", objectFit: "cover" }}
            cldImg={theer}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
