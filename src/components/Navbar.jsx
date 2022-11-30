import React, { useState } from "react";
import "../styleSheets/navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav_menu");

  const [icon, setIcon] = useState("nav_cambio");

  const navToggle = () => {

    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");

    // Icon Toggler
    if (icon === "nav_cambio") {
      setIcon("nav_cambio rotar");
    } else setIcon("nav_cambio");

  };

  return (
    <nav className="nav">
      <a href="#" className="nav_marca">
        Sebastian GTZ
      </a>
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            ¿Quién Soy?
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Experiencia
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Portafolio
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Skills
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Contactame
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="linea1"></div>
        <div className="linea2"></div>
        <div className="linea3"></div>
      </div>
    </nav>
  );
}

export default Navbar;