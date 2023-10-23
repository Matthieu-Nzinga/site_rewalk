import React from "react";
import "../css/Projets.css";
import { Link } from "react-router-dom";
import Vous_etes_interesse from "../components/Vous_etes_interesse";


function Projets() {
  return (
    <div className="projet_div_principal">
      <div className="service_div_one">
        <div>
          <h2 className="h2_nos">Nos projets</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet?
            Minus, corporis recusandae unde at sed sit molestiae repellendus
            aliquid obcaecati temporibus aut modi nemo omnis dolorem! Ut, optio
            alias.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698056669/design-home-minimalist-modern-idea-art_483537-3417-removebg-preview_aty4vj.png"
            alt="Nos projets"
          />
        </div>
      </div>

      <div className="service_div_two">
        <div className="div_button">
          <button>
            <Link>Architecture</Link>
          </button>
          <button>
            <Link>Design</Link>
          </button>
          <button>
            <Link>Bâtiments de bureau</Link>
          </button>
          <button>
            <Link>Bâtiments intelligents</Link>
          </button>
          <button>
            <Link>Ponts</Link>
          </button>
        </div>
        <div className="service_div">
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698059623/rewalk/IMG-20231003-WA0042_vrkoxj.jpg"
            alt="Image projets"
          />
          <div className="service_divEcrit">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              excepturi corrupti consectetur cumque nam ea quaerat? Amet
              assumenda ullam perferendis, labore harum odit laboriosam beatae
              aperiam ipsam reprehenderit molestiae quia Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus, aperiam! Impedit
              nesciunt, vitae aliquam qui obcaecati consectetur eveniet officiis
              aspernatur amet rem ipsa ducimus dolorem esse quod unde vel atodit
              laboriosam beatae aperiam ipsam reprehenderit molestiae .
            </p>
            <ul className="service_ul">
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
                <span>Matthieu Nzinga</span>
              </li>
            </ul>
            <button>
              <Link>En savoir plus</Link>
            </button>
          </div>
        </div>
        <div className="service_div service_inverse">
          <div className="service_divEcrit">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              excepturi corrupti consectetur cumque nam ea quaerat? Amet
              assumenda ullam perferendis, labore harum odit laboriosam beatae
              aperiam ipsam reprehenderit molestiae quia Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus, aperiam! Impedit
              nesciunt, vitae aliquam qui obcaecati consectetur eveniet officiis
              aspernatur amet rem ipsa ducimus dolorem esse quod unde vel atodit
              laboriosam beatae aperiam ipsam reprehenderit molestiae .
            </p>
            <ul className="service_ul">
              <li>
                <p>Surface</p>
                <span>25 x 25 m</span>
              </li>
              <li>
                <p>Année</p>
                <span>2022</span>
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
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698060017/rewalk/IMG-20231003-WA0058_lh3hvx.jpg"
            alt="Image Projet"
          />
        </div>
        <div className="service_div">
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698060268/rewalk/IMG-20231003-WA0102_fwcisp.jpg"
            alt="Image projet"
          />
          <div className="service_divEcrit">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              excepturi corrupti consectetur cumque nam ea quaerat? Amet
              assumenda ullam perferendis, labore harum odit laboriosam beatae
              aperiam ipsam reprehenderit molestiae quia Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus, aperiam! Impedit
              nesciunt, vitae aliquam qui obcaecati consectetur eveniet officiis
              aspernatur amet rem ipsa ducimus dolorem esse quod unde vel atodit
              laboriosam beatae aperiam ipsam reprehenderit molestiae .
            </p>
            <ul className="service_ul">
              <li>
                <p>Surface</p>
                <span>15 x 15 m</span>
              </li>
              <li>
                <p>Année</p>
                <span>2022</span>
              </li>
              <li>
                <p>Client</p>
                <span>Mario Baitelemeke</span>
              </li>
            </ul>
            <button>
              <Link>En savoir plus</Link>
            </button>
          </div>
        </div>
        <div className="service_div service_inverse">
          <div className="service_divEcrit">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              excepturi corrupti consectetur cumque nam ea quaerat? Amet
              assumenda ullam perferendis, labore harum odit laboriosam beatae
              aperiam ipsam reprehenderit molestiae quia Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus, aperiam! Impedit
              nesciunt, vitae aliquam qui obcaecati consectetur eveniet officiis
              aspernatur amet rem ipsa ducimus dolorem esse quod unde vel atodit
              laboriosam beatae aperiam ipsam reprehenderit molestiae .
            </p>
            <ul className="service_ul">
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
                <span>Elisee Nyaitambaka</span>
              </li>
            </ul>
            <button>
              <Link>En savoir plus</Link>
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698060894/rewalk/IMG-20231003-WA0072_rjhr5r.jpg"
            alt="Image projet"
          />
        </div>
      </div>
      <Vous_etes_interesse/>
      
    </div>
  );
}

export default Projets;
