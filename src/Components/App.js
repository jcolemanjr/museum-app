import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from `react-router-dom`
import Navbar from `./Navbar`;
import Gallery from `./Gallery`;
import About from `./About`;
import Favorites from `./Favorites`;



function App() {

  const [artworks, setArtworks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/Artwork')
    .then((res) => res.json())
    .then((data) => setArtworks(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery artworks={artworks} setArtworks={setArtworks} />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Favorites />} />
      </Routes>
    </Router>
  )
};

export default App;