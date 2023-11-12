import React, { useState, useEffect } from "react";
import "../css/Temoignage.css";
import { nzingaImage } from "../images/Image";

function Temoignage() {
  const testimonials = [
    {
      id: 1,
      text: "Rewalk-Construct a dépassé toutes mes attentes, transformant ma vision d'une maison idéale en une réalité exceptionnelle.",
      imagesCard:
        "https://res.cloudinary.com/dvh6uj9l2/image/upload/v1697650381/rewalk/nzingaImage.jpg",
      nom: "Matthieu Nzinga",
      poste: "CEO Intellitico",
    },
    {
      id: 2,
      text: "Une expérience de construction sans faille avec Rewalk-Construct, mon rêve de maison parfaite est devenu une réalité.",
      imagesCard:
        "https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698066082/rewalk/image_4_wymfzi.png",
      nom: "Mario Baitelemeke",
      poste: "Assistant",
    },
    {
      id: 3,
      text: "Choisir Rewalk-Construct a été la meilleure décision pour notre projet de construction, une qualité inégalable.",
      imagesCard:
        "https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698066082/rewalk/Frame_3_snx5br.png",
      nom: "Baweni Walker",
      poste: "Ir Civil",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); 
    }, 5000); 

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="temoignage-div">
      <img
        src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1697644252/rewalk/imageTemoignage.png"
        alt="arrière-plan"
      />
      <div className="dive-image"></div>
      <div className="carrousel_div_temoignage">
        <div className="carrousel">
            <div className="carousel_gap" key={testimonials[currentIndex].id}>
              <p>⭐⭐⭐⭐⭐</p>
              <p>{testimonials[currentIndex].text}</p>
              <div className="carrousel_flex">
                <img src={testimonials[currentIndex].imagesCard} alt="" />
                <div>
                  <h4>{testimonials[currentIndex].nom}</h4>
                  <span>{testimonials[currentIndex].poste} </span>
                </div>
              </div>
            </div>
        </div>
        <div className="carrousel-button">
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default Temoignage;
