import React from "react";
import "./HeaderNavigation.scss";
import Logo from "../../Pictures/logo.svg";

function HeaderNavigation() {
  return (
    <div className="header-container">
      <img src={Logo} alt="logo" className="header-logo" />
    </div>
  );
}

export default HeaderNavigation;
