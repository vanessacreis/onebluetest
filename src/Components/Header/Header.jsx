import React from "react";
import * as S from "./header.js";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderLogo from "../../Assets/icons/icon_header.png";

const Header = () => {
  return (
    <S.Header>
      <img src={HeaderLogo} alt="Icon Stories App" />
      <NavLink
        to="/"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        About us
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Login
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) => `nav_link${isActive ? " active" : ""}`}
      >
        Create an account
      </NavLink>
    </S.Header>
  );
};

export default Header;
