import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../css/CarrouselService.css";
import { AdvancedImage } from "@cloudinary/react";
import {
  slide1,
  slide3,
  slide4,
  slider2,
  architecture1,
  architecture2,
  architecture3,
  architecture4,
  pont1,
  pont2,
  pont3,
  pont4
} from "../images/Image";

function CarrouselService() {
  const datas = [
    {
      id: 1,
      titre: "architecture",
      photos: [
        {
          element1: architecture1,
          element2: architecture2,
          element3: architecture3,
          element4: architecture4,
        },
      ],
    },
    {
      id: 2,
      titre: "Design",
      photos: [
        {
          element1: architecture2,
          element2: slide1,
          element3: architecture4,
          element4: slide3,
        },
      ],
    },
    {
      id: 3,
      titre: "Bâtiments intelligents",
      photos: [
        {
          element1: slide1,
          element2: slider2,
          element3: slide3,
          element4: slide4,
        },
      ],
    },
    {
      id: 4,
      titre: "Bâtiments de bureau",
      photos: [
        {
          element1: slide1,
          element2: slide3,
          element3: slider2,
          element4: slide4
        },
      ],
    },
    {
      id: 5,
      titre: "Ponts",
      photos: [
        {
          element1: pont1,
          element2: pont2,
          element3: pont3,
          element4: pont4
        },
      ],
    }
  ];
  return (
    <div className="div-service">
      <div className="div-title">
        <h2 className="h2_a">Nos services</h2>
      </div>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
      >
        {datas.map((slide) => (
          <div className="service_carrousel" key={slide.id}>
            <AdvancedImage
              style={{ width: "25%", height: "300px", objectFit: "cover" }}
              cldImg={slide.photos[0].element1}
            />
            <AdvancedImage
              style={{ width: "25%", height: "300px", objectFit: "cover" }}
              cldImg={slide.photos[0].element2}
            />
            <AdvancedImage
              style={{ width: "25%", height: "300px", objectFit: "cover" }}
              cldImg={slide.photos[0].element3}
            />
            <AdvancedImage
              style={{ width: "25%", height: "300px", objectFit: "cover" }}
              cldImg={slide.photos[0].element4}
            />

            <h2>{slide.titre}</h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarrouselService;
