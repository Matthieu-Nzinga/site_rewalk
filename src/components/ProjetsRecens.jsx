import React from "react";
import "../css/ProjetsRecens.css";
import { Link } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { nonProjet, nonProjet1 } from "../images/Image";

function ProjetsRecens() {
  return (
    <div className="recent-projects">
      <div className="oneDiv">
        <h2 className="h2_a">Nos projets récents</h2>
        <Link className="toutVoir">Tout voir</Link>
      </div>
      <div className="div-recent-projects">
        <div>
          <AdvancedImage className="ims" cldImg={nonProjet} />
        </div>
        <div className="divEcrit">
          <p>
            En 2021, Rewalk-Construct a réalisé une résidence exceptionnelle à
            Ngaliema, Kinshasa. Cette élégante demeure, fusionnant modernité et
            fonctionnalité, témoigne de notre engagement envers l'excellence.
            Nichée dans un quartier dynamique, elle incarne notre dévouement à
            créer des espaces de vie exceptionnels. Notre fierté réside dans la
            contribution positive apportée à la communauté locale.
            Rewalk-Construct : bâtir des rêves, construire des communautés.
          </p>
          <ul className="ullllll">
            <li>
              <p>Surface</p>
              <span>20 x 20 m</span>
            </li>
            <li>
              <p>Année</p>
              <span>2021</span>
            </li>
            <li>
              <p>Client</p>
              <span>Augustin Longeli</span>
            </li>
          </ul>
          <button>
            <Link>En savoir plus</Link>
          </button>
        </div>
      </div>
      <div className="div-recent-projects enver">
        <div className="divEcrit">
          <p>
            En 2020, Rewalk-Construct a concrétisé un projet résidentiel
            distinctif au cœur de la commune de Barumbu. Cette résidence,
            alliant élégance contemporaine et fonctionnalité, incarne notre
            engagement envers l'excellence dans la construction. Imprégné de
            notre savoir-faire, ce projet a enrichi le paysage urbain de Barumbu
            et contribué à créer des espaces de vie exceptionnels.
          </p>
          <ul className="ullllll">
            <li>
              <p>Surface</p>
              <span>18 x 18 m</span>
            </li>
            <li>
              <p>Année</p>
              <span>2020</span>
            </li>
            <li>
              <p>Client</p>
              <span>Matthieu Nzinga</span>
            </li>
          </ul>
          <button>
            <Link>En savoir plus</Link>
          </button>
        </div>
        <div>
          <AdvancedImage className="ims" cldImg={nonProjet1} />
        </div>
      </div>
    </div>
  );
}

export default ProjetsRecens;
