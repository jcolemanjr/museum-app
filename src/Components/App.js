import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Gallery from './Gallery';
import About from './About';
import Favorites from './Favorites';



function App() {

  const [artworks, setArtworks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/Artwork')
    .then((res) => res.json())
    .then((data) => setArtworks(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Gallery" element={<Gallery artworks={artworks} setArtworks={setArtworks} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
};

export default App;