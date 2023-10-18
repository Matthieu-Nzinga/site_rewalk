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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            excepturi corrupti consectetur cumque nam ea quaerat? Amet assumenda
            ullam perferendis, labore harum odit laboriosam beatae aperiam ipsam
            reprehenderit molestiae quia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus, aperiam! Impedit nesciunt, vitae
            aliquam qui obcaecati consectetur eveniet officiis aspernatur amet
            rem ipsa ducimus dolorem esse quod unde vel atodit laboriosam beatae
            aperiam ipsam reprehenderit molestiae .
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
      <div className="div-recent-projects">
        <div className="divEcrit">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            excepturi corrupti consectetur cumque nam ea quaerat? Amet assumenda
            ullam perferendis, labore harum odit laboriosam beatae aperiam ipsam
            reprehenderit molestiae quia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus, aperiam! Impedit nesciunt, vitae
            aliquam qui obcaecati consectetur eveniet officiis aspernatur amet
            rem ipsa ducimus dolorem esse quod unde vel atodit laboriosam beatae
            aperiam ipsam reprehenderit molestiae .
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
