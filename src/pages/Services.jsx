import React from "react";
import "../css/Services.css";
import Vous_etes_interesse from "../components/Vous_etes_interesse";

function Services() {
  return (
    <div className="service_div_pricipal">
      <div className="service_div_one">
        <div>
          <h2 className="h2_nos">Nos service</h2>
          <p>
            Bienvenue dans l'univers diversifié et spécialisé de
            Rewalk-Construct. Nos services transcendent la simple construction
            pour embrasser une approche holistique de la création d'espaces
            exceptionnels. Chaque service que nous offrons représente notre
            engagement envers l'excellence, l'innovation et la satisfaction du
            client. Découvrez comment nous pouvons concrétiser votre vision et
            dépasser vos attentes.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698047364/image_2-removebg-preview_hzvkir.png"
            alt="Nos service Image"
          />
        </div>
      </div>
      <div className="service_div_two">
        <div className="service_div">
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698049438/image_6_dyq2ov.png"
            alt="Image Architecture"
          />
          <div className="service_divEcrit">
            <h2 className="h2_service">Architecture</h2>
            <p>
              Notre service d'architecture chez Rewalk-Construct va au-delà de
              la simple conception de bâtiments. Nous sommes des créateurs
              d'espaces uniques, des architectes passionnés qui transforment vos
              idées en structures tangibles. Chaque ligne dessinée, chaque
              détail réfléchi est une expression de notre engagement envers
              l'esthétique, la fonctionnalité et l'innovation.
            </p>
            <ul className="service_ul">
              <li>
                <p>Expérience</p>
                <span>5 ans</span>
              </li>
              <li>
                <p>Projet</p>
                <span>25</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="service_div service_inverse">
          <div className="service_divEcrit">
            <h2 className="h2_service">Design</h2>
            <p>
              Le service de design chez Rewalk-Construct est bien plus qu'une
              question d'esthétique – c'est une immersion dans la création
              d'expériences visuelles et fonctionnelles captivantes. Nous
              comprenons que chaque détail compte, et c'est pourquoi notre
              équipe de designers talentueux s'engage à transcender les attentes
              pour donner vie à votre vision.
            </p>
            <ul className="service_ul">
              <li>
                <p>Expérience</p>
                <span>5 ans</span>
              </li>
              <li>
                <p>Projet</p>
                <span>20</span>
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698051030/image_8_jpkqgy.png"
            alt="Image Design"
          />
        </div>
        <div className="service_div">
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698052218/IMG-20231003-WA0051_mdkxmr.jpg"
            alt="Image Bâtiments de bureau"
          />
          <div className="service_divEcrit">
            <h2 className="h2_service">Bâtiments de bureau</h2>
            <p>
              Chez Rewalk-Construct, nous comprenons que les espaces de bureau
              ne sont pas simplement des structures, mais des moteurs de
              productivité et de collaboration. Notre service de bâtiments de
              bureau est conçu pour créer des environnements de travail
              inspirants qui favorisent l'efficacité et le bien-être des
              équipes.
            </p>
            <ul className="service_ul">
              <li>
                <p>Expérience</p>
                <span>5 ans</span>
              </li>
              <li>
                <p>Projet</p>
                <span>48</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="service_div service_inverse">
          <div className="service_divEcrit">
            <h2 className="h2_service">Bâtiments intelligents</h2>
            <p>
              Bienvenue dans l'avenir de la construction avec notre service de
              bâtiments intelligents chez Rewalk-Construct. Nous intégrons la
              technologie de pointe pour créer des espaces connectés, économes
              en énergie et adaptatifs à vos besoins évolutifs.
            </p>
            <ul className="service_ul">
              <li>
                <p>Expérience</p>
                <span>5 ans</span>
              </li>
              <li>
                <p>Projet</p>
                <span>80</span>
              </li>
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698052189/IMG-20231003-WA0083_uidt0o.jpg"
            alt="Image bâtiments intelligents"
          />
        </div>
        <div className="service_div">
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698053361/230612_01_ph03_2_sprpyd.jpg"
            alt="Image Ponts"
          />
          <div className="service_divEcrit">
            <h2 className="h2_service">Ponts</h2>
            <p>
              Les ponts sont bien plus que des structures de liaison; ce sont
              des symboles de connexion et d'ingénierie audacieuse. Chez
              Rewalk-Construct, notre service de conception de ponts unit
              l'esthétique à la fonction, créant des liaisons durables qui
              défient les conventions.
            </p>
            <ul className="service_ul">
              <li>
                <p>Expérience</p>
                <span>5 ans</span>
              </li>
              <li>
                <p>Projet</p>
                <span>4</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Vous_etes_interesse />
    </div>
  );
}

export default Services;
