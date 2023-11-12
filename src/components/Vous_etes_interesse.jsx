import React from "react";
import "../css/Vous_etes_interesse.css";
import { Link } from "react-router-dom";

function Vous_etes_interesse() {
  return (
    <div className="Vous_etes_interesse">
      <div>
        <h2 className="h2_a">Vous êtes intéressé ?</h2>
        <p>
          Chez Rewalk-Construct, nous sommes prêts à concrétiser vos projets de
          construction. Si vous aspirez à créer la maison de vos rêves ou si
          vous avez des questions sur nos services, n'hésitez pas à nous
          contacter. Notre équipe dédiée est là pour vous guider à chaque étape,
          de la conception à la réalisation.
        </p>
        <button>
          <Link to={"/contact"}>Nous contacter</Link>
        </button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698040125/image_11_wraure.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Vous_etes_interesse;
