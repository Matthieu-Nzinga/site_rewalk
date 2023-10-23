import React from "react";
import "../css/Apropos.css";
import Vous_etes_interesse from "../components/Vous_etes_interesse";


function Apropos() {
  return (
    <div className="apropo_div_pricipal">
      <div className="service_div_one">
        <div>
          <h2 className="h2_nos">A propos de nous</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet?
            Minus, corporis recusandae unde at sed sit molestiae repellendus
            aliquid obcaecati temporibus aut modi nemo omnis dolorem! Ut, optio
            alias.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698062346/rewalk/1004472_OIU9RQ0-removebg-preview_wdffra.png"
            alt="Nos projets"
          />
        </div>
      </div>
      <div className="apropos_co">
        <div className="apropos_ecrit">
          <h2 className="h2_service">Qui sommes nous ?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            iste modi tenetur quae libero id expedita numquam culpa amet, magnam
            suscipit, voluptate eius voluptatem. Cupiditate quod vero
            accusantium illo iure Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptates iste modi tenetur quae libero id
            expedita numquam culpa amet, magnam suscipit, voluptate eius
            voluptatem. Cupiditate quod vero accusantium illo iure.
          </p>
          <h2 className="h2_service">Notre objectif</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            iste modi tenetur quae libero id expedita numquam culpa amet, magnam
            suscipit, voluptate eius voluptatem. Cupiditate quod vero
            accusantium illo iure Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptates iste modi tenetur quae libero id
            expedita numquam culpa amet, magnam suscipit, voluptate eius
            voluptatem. Cupiditate quod vero accusantium illo iure.
          </p>
        </div>
      </div>
      <div className="notre_equipe">
        <div className="h2_apropos">
          <h2 className="h2_service">Notre équipe</h2>
        </div>
        <div className="div_image_apropos">
          <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698066082/rewalk/Frame_3_snx5br.png" alt="image a propos de nous" />
          <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698066082/rewalk/image_3_gc5kwv.png" alt="image a propos de nous" />
          <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698066082/rewalk/image_4_wymfzi.png" alt="image a propos de nous" />
          <img src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698066378/rewalk/image_5_tfotg1.png" alt="image a propos de nous" />
        </div>
      </div>
      <Vous_etes_interesse/>

    </div>
  );
}

export default Apropos;
