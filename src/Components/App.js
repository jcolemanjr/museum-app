import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from `react-router-dom`
import Navbar from `./Navbar`;
import Gallery from `./Gallery`;
import About from `./About`;
import Favorites from `./Favorites`;

useEffect(() => {
  fetch('http://localhost:3000/Artwork')
  .then((res) => res.json())
  .then((data) => setArtworks(data));
}, []);


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Favorites />} />
      </Routes>
    </Router>
  )
};

export default App;
