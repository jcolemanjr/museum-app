import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" >Home</NavLink>
      <NavLink to="/Gallery" activeClassName="active" >Gallery</NavLink>
      <NavLink to="/Favorites" activeClassName="active" >Favorites</NavLink>
    </nav>
  );
}

export default Navbar;
