import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/Gallery">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
