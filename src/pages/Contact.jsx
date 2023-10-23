import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="div_principal_contact">
      <div className="service_div_one">
        <div>
          <h2 className="h2_nos">Contactez-nous</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, amet?
            Minus, corporis recusandae unde at sed sit molestiae repellendus
            aliquid obcaecati temporibus aut modi nemo omnis dolorem! Ut, optio
            alias.
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dvh6uj9l2/image/upload/v1698074809/rewalk/image_2__1_-removebg-preview_oq3mw7.png"
            alt="image contactez-nous"
          />
        </div>
      </div>
      <div className="contact_one">
        <h2 className="h2_service">Formulaire de contact</h2>
        <div className="formulaire_contact">
          <div className="formulaire">
            <input type="text" placeholder="Votre nom" />
            <input type="text" placeholder="Votre prénom" />
            <input type="email" placeholder="Votre email" />
            <input type="number" placeholder="Votre téléphone" />
            <input type="text" placeholder="Votre message" />

            <button>Envoyer</button>
          </div>
          <div className="contact_service">
            <div>
              <h3>Nos adresses</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quos eum !
              </p>
              <p>Email : lorem@gmail.com</p>
              <p>Téléphone : +243 81 29 00 285</p>
            </div>
            <div>
              <h3>Nos siéges</h3>
              <p>Kinshasa - Lubumbashi - Goma</p>
            </div>
            <div>
              <h3>Nos heures de travail</h3>
              <p>08h00-17h00</p>
            </div>
          </div>
          <div className="espace"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
