import React from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : null)}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/Apropos"
              className={({ isActive }) => (isActive ? "underline" : null)}
            >
              <li>A Propos</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
