import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Gallery">Gallery</Link>
      <Link to="/Favorites">Favorites</Link>
    </nav>
  );
}

export default Navbar;
