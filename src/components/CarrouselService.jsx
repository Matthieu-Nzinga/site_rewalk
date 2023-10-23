import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/CarrouselService.css";
import { AdvancedImage } from "@cloudinary/react";
import { slide1, slide3, slide4, slider2 } from "../images/Image";

function CarrouselService() {
  const datas = [
    {
      id: 1,
      titre: "architecture",
      photos: [
        {
          slide1,
          slider2,
          slide3,
          slide4,
        },
      ],
    },
    {
      id: 2,
      titre: "batiment",
      photos: [
        {
          slide1,
          slider2,
          slide3,
          slide4,
        },
      ],
    },
    {
      id: 3,
      titre: "Informatique",
      photos: [
        {
          slide1,
          slider2,
          slide3,
          slide4,
        },
      ],
    },
  ];
  return (
    <div className="div-service">
      <div className="div-title">
        <h2 className="h2_a">Nos services</h2>
      </div>
      <Carousel>
        {datas.map((slide) => (
          <div key={slide.id}>
            <AdvancedImage cldImg={slide.photos[0].slide1} />
            <AdvancedImage cldImg={slide.photos[0].slider2} />
            <AdvancedImage cldImg={slide.photos[0].slide3} />
            <AdvancedImage cldImg={slide.photos[0].slide4} />

            <h2>{slide.titre}</h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarrouselService;
