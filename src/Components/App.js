import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar';
import Gallery from './Gallery';
import About from './About';
import Favorites from './Favorites';



function App() {

  const [artworks, setArtworks] = useState([])
  const [favorites, setfavorites] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/Artwork')
    .then((res) => res.json())
    .then((data) => setArtworks(data));
  }, []);


  useEffect(() => {
    fetch('http://localhost:3000/Favorites')
        .then(r => r.json())
        .then((data) => setfavorites(data))
}, [])


  const removeFromFavorites = async (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setfavorites(updatedFavorites);

    await fetch(`http://localhost:3000/Favorites/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
      const updatedFavorites = favorites.filter((fav) => fav.id !== id);
      setfavorites(updatedFavorites);
      console.log(updatedFavorites)
    });
  };

  


  //FOR A HEADER LETS GO AHEAD AND JUST PLACE IT INSIDE OF EACH COMPONENT TO CREATE THE SAME HEADER FOR EACH
  
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Gallery" element={<Gallery favorites={favorites} setfavorites={setfavorites} artworks={artworks} setArtworks={setArtworks} />} />
        <Route exact path="/Favorites" element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} setfavorites={setfavorites} />} />
      </Routes>
    </Router>
    </div>
   )
};

export default App;