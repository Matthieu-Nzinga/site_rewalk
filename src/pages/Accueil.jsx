import React from "react";
import "../css/Accueil.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Carrousel from "../components/Carrousel";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <div className="sectionOne">
        <div className="heroSection">
          <h1>Construisez votre maison de rêve.</h1>
          <p>
            Imaginez un lieu où chaque détail est le reflet de vos rêves, un
            espace où la beauté rencontre la fonctionnalité, où chaque coin
            respire votre personnalité. C'est le moment de passer de
            l'imaginaire à la réalité. Avec notre équipe d'experts passionnés et
            dévoués, nous sommes là pour vous aider à concrétiser votre vision
          </p>
          <button>Explorer maitenant</button>
        </div>
        <div className="towSection">
          <div>
            <h2>8</h2>
            <p>Ans d'expérience</p>
          </div>
          <div>
            <h2>35</h2>
            <p>Projets réalisés</p>
          </div>
        </div>
        <div className="threeSection">
          <Link>{<GrFacebookOption />}</Link>
          <Link> {<AiFillInstagram />} </Link>
          <Link> {<BsTwitter />} </Link>
        </div>
      </div>
      <Carrousel />
    </div>
  );
}

export default Accueil;
