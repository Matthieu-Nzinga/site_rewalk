import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AdvancedImage } from "@cloudinary/react";
import { logo } from "../images/Image";
import "../css/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav_menu");

    const [toggleIcon, setToggleIcon] = useState("nav_toggler")

    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

        // togglerIcon

        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
    }

  return (
    <div>
      <nav className="nav">
        <Link to={"/"}>
          <AdvancedImage cldImg={logo} />
        </Link>
        <div className={active}>
          <Link className="nav_item" to={"/"}>
            Accueil
          </Link>
          <Link className="nav_item" to={"/service"}>
            Services
          </Link>
          <Link className="nav_item" to={"/projet"}>
            Projets
          </Link>
          <Link className="nav_item" to={"/apropos"}>
            A Propos
          </Link>
        </div>

        <button className="contactButton">
          <Link to={"/contact"}>Contact</Link>
        </button>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
