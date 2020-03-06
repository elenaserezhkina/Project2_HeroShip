import React from "react";
import "./HeaderNavigation.scss";
import Logo from "../../Pictures/logo.svg";
import { Link } from "react-router-dom";

function HeaderNavigation() {
  return (
    <div className="header-container">
      <Link exact="true" to="/home">
        <img src={Logo} alt="logo" className="header-logo" />
      </Link>
    </div>
  );
}

export default HeaderNavigation;
