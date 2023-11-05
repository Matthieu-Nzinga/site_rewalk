import React from "react";
import "../css/Accueil.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Carrousel from "../components/Carrousel";
import { Link } from "react-router-dom";
import Anous from "../components/Anous";
import CarrouselService from "../components/CarrouselService";
import ProjetsRecens from "../components/ProjetsRecens";
import Temoignage from "../components/Temoignage";
import Vous_etes_interesse from "../components/Vous_etes_interesse";

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
          <div>
            <Link to={"/apropos"}>
              <button>Explorer maitenant</button>
            </Link>
          </div>
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
          <Link
            to={
              "https://web.facebook.com/profile.php?id=100066840540826&locale=fr_FR"
            }
            target="_blank"
          >
            {<GrFacebookOption />}
          </Link>
          <Link> {<AiFillInstagram />} </Link>
          <Link> {<BsTwitter />} </Link>
        </div>
      </div>
      <Carrousel />
      <Anous />
      <CarrouselService />
      <ProjetsRecens />
      <Temoignage />
      <Vous_etes_interesse />
    </div>
  );
}

export default Accueil;
