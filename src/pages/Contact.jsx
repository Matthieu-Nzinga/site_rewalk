import React from "react";
import "../css/Contact.css";
import emailjs from 'emailjs-com';

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'service_tbn0i2l';
    const TEMPLATE_ID = 'template_br1fryw';
    const USER_ID = 'y4ocHgMv-GwYUoxFf';

    let prénom = e.target.prénom.value;
    let nom = e.target.nom.value;
    let email = e.target.email.value;
    let téléphone = e.target.téléphone.value;
    let message = e.target.message.value;

    const templateParams = {
      prénom,
      nom,
      email,
      téléphone,
      message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((result) => {
        alert('votre e-mail est envoyé avec succès:', result.text);
        e.target.prénom.value = '';
        e.target.nom.value = '';
        e.target.email.value = '';
        e.target.téléphone.value = '';
        e.target.message.value = '';
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error.text);
      });

      prénom = '';
      nom = '';
  };

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
            <form onSubmit={sendEmail}>
            <input type="text" name="prénom" placeholder="Votre prénom" />
            <input type="text" name="nom" placeholder="Votre nom" />
            <input type="email" name="email" placeholder="Votre email" />
            <input type="number" name="téléphone" placeholder="Votre téléphone" />
            <input type="text" name="message" placeholder="Votre message" />

            <button type="submit">Envoyer</button>
            </form>
            
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
