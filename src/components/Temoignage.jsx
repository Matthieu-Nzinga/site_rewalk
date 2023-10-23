import React from 'react'
import "../css/Temoignage.css";
import { nzingaImage } from '../images/Image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Temoignage() {

    const testimonials = [
        {
            id : 1,
            text : "Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur,",
            imagesCard : nzingaImage,
            nom:"Matthieu Nzinga",
            poste : "CEO Intellitico"
        }
    ]

  return (
    <div className='temoignage-div'>
        <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1697644252/rewalk/imageTemoignage.png" alt="arrière-plan" />
        <div className='dive-image'></div>
    </div>
  )
}

export default Temoignage