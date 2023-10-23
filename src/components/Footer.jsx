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
    <div className="footer">
      <div className="footer_div_one">
        <Link to={"/"}>
          <AdvancedImage cldImg={logo} />
        </Link>
        <p>
          Il a survécu non seulement à cinq siècles, mais aussi au saut vers la
          composition électronique, restant essentiellement inchangé.
        </p>
        <div className="footer_icons">
          <Link>{<GrFacebookOption />}</Link>
          <Link> {<AiFillInstagram />} </Link>
          <Link> {<BsTwitter />} </Link>
        </div>
      </div>
      <div className="footer_div_two">
        <h2 className="h2_a">L'entreprise</h2>
        <div className="footer_links">
          <Link className="nav_item">Equipe</Link>
          <Link className="nav_item">Carrière</Link>
          <Link className="nav_item">Portfolio</Link>
          <Link className="nav_item">Clients</Link>
          <Link className="nav_item">Mode de travail</Link>
          <Link className="nav_item">Galeries</Link>
          <Link className="nav_item">Projets</Link>
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
  );
}

export default Footer;
