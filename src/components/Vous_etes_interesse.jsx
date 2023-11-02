import React from "react";
import "../css/Vous_etes_interesse.css";
import { Link } from "react-router-dom";

function Vous_etes_interesse() {
  return (
    <div className="Vous_etes_interesse">
      <div >
        <h2 className="h2_a">Vous êtes intéressé ?</h2>
        <p>
          Il a survécu non seulement à cinq siècles, mais aussi au saut vers la
          composition électronique, restant essentiellement inchangé.
        </p>
        <button><Link to={"/contact"}>Nous contacter</Link></button>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698040125/image_11_wraure.png" alt="" />
      </div>
    </div>
  );
}

export default Vous_etes_interesse;
