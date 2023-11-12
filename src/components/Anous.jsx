import React from "react";
import "../css/Anous.css";
import { AdvancedImage } from "@cloudinary/react";
import { arrieurPlan, myImage } from "../images/Image";
import { Link } from "react-router-dom";

function Anous() {
  return (
    <div className="divs">
      <div>
        <h2 className="h2_a">A propos de nous</h2>
        <p>
          Chez Rewalk-Construct, nous sommes bien plus qu'une entreprise de
          construction. Nous sommes des artisans passionnés, dévoués à
          transformer vos rêves de maison en réalité. Notre équipe experte allie
          compétence technique, innovation durable et un service personnalisé
          pour créer des espaces de vie exceptionnels. Avec chaque projet, nous
          nous engageons à offrir non seulement des maisons de qualité, mais
          aussi des expériences de construction transparentes et mémorables.
          Choisissez Rewalk-Construct pour concrétiser votre vision et
          construire un avenir inspirant ensemble.
        </p>
        <div>
          <Link to={"/apropos"}>
            <button>En savoir plus</button>
          </Link>
        </div>
      </div>
      <div>
        <AdvancedImage style={{ height: "45vh", width:"500px", objectFit: "cover" }} className="imgs" cldImg={myImage} />
        <div>
          <AdvancedImage className="ar_plan" cldImg={arrieurPlan} />
        </div>
      </div>
    </div>
  );
}

export default Anous;
