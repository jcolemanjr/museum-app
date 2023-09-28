import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";

function Favorites({removeFromFavorites, favorites}) {
useEffect(() => {
  const audio = document.querySelector(".fourthAudio");
  audio.volume = 0.2;
}, []);

const [selectedArtwork, setSelectedArtwork] = useState(null);

const handleArtworkClick = (artwork) => {
  setSelectedArtwork(artwork);
};


    //&& <--- is the logical AND operator. It's used to conditionally render the element on its right only if the condition on its left is true.


    return (
      <div>
        <audio
          className="fourthAudio"
          src="/Assets/One Night in Bangkok.mp3"
          type="audio/mpeg"
          autoPlay
        />
        <div>
          <h1 className="favorites">Favorites</h1>
        </div>
        <div className="artpiece">
          {favorites.length < 1 && (
            <p className="visitorNote">"Add some artwork, please and thank you gentle skin pod." - Tyler Taylor</p>
          )}{" "}
          {/* <---- feature by Tyler Taylor*/}
          {favorites.map((artwork) => (
            <Artwork
              removeFromFavorites={removeFromFavorites}
              key={artwork.id}
              isOnFavorites={true}
              {...artwork}
              onClick={() => handleArtworkClick(artwork)}
            />
          ))}
        </div>
        {selectedArtwork && (
        <div className="interstitial">
          <img className="interimage" onClick={() => setSelectedArtwork(null)} src={selectedArtwork.image} alt={selectedArtwork.title} />
        </div>
      )}
      </div>
    );
}



export default Favorites;