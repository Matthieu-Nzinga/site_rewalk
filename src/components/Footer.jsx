import React from "react";
import "../css/Footer.css";
import { AdvancedImage } from "@cloudinary/react";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { logo } from "../images/Image";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer_div_one">
          <Link to={"/"}>
            <AdvancedImage cldImg={logo} />
          </Link>
          <p>
            Transformez vos rêves en réalité avec Rewalk-Construct. Notre
            engagement envers l'excellence a résisté à l'épreuve du temps,
            évoluant avec l'innovation tout en maintenant notre dévouement à
            créer des espaces de vie exceptionnels.
          </p>
          <div className="footer_icons">
            <Link
              to={"https://web.facebook.com/spoons243?locale=fr_FR"}
              target="_blank"
            >
              {<GrFacebookOption />}
            </Link>
            <Link> {<AiFillInstagram />} </Link>
            <Link> {<BsTwitter />} </Link>
          </div>
        </div>
        <div className="footer_div_two">
          <h2 className="h2_a">L'entreprise</h2>
          <div className="footer_links">
            <Link className="nav_item" to={"/apropos"}>
              Equipe
            </Link>
            <Link className="nav_item">Carrière</Link>
            <Link className="nav_item">Portfolio</Link>
            <Link className="nav_item">Clients</Link>
            <Link className="nav_item">Mode de travail</Link>
            <Link className="nav_item">Galeries</Link>
            <Link className="nav_item" to={"/projet"}>
              Projets
            </Link>
          </div>
        </div>
        <div className="footer_div_three">
          <h2 className="h2_a">Services</h2>
          <div className="footer_links">
            <Link className="nav_item">Architecture</Link>
            <Link className="nav_item">Design</Link>
            <Link className="nav_item">Batiments de bureau</Link>
            <Link className="nav_item">Bâtiments Intelligents</Link>
            <Link className="nav_item">Ponts</Link>
          </div>
        </div>
      </div>
      {/* <p className="droit-reserve">Copyright © 2023 Rewalk-Construct.</p> */}
    </div>
  );
}

export default Footer;
