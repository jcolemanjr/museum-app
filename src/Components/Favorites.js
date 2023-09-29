import React, { useEffect, useState, useRef } from "react";
import Artwork from "./Artwork";

function Favorites({ removeFromFavorites, favorites }) {
  useEffect(() => {
    const audio = document.querySelector(".fourthAudio");
    audio.volume = 0.2;
  }, []);

  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const globalClickListenerTimeout = useRef(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleGlobalClick = () => {
    setSelectedArtwork(null);
  };

  useEffect(() => {
    if (selectedArtwork) {
      if (globalClickListenerTimeout.current) {
        clearTimeout(globalClickListenerTimeout.current);
      }
      globalClickListenerTimeout.current = setTimeout(() => {
        document.addEventListener('click', handleGlobalClick);
      }, 100);
    }
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      if (globalClickListenerTimeout.current) {
        clearTimeout(globalClickListenerTimeout.current);
      }
    };
  }, [selectedArtwork]);

  return (
    <div>
      <audio
        className="fourthAudio"
        src="/Assets/One Night in Bangkok.mp3"
        type="audio/mpeg"
        autoPlay
        loop
      />
      <div>
        <h1 className="favorites">Favorites</h1>
      </div>
      <div className="artpiece">
        {favorites.length < 1 && (
          <p className="visitorNote">"Add some artwork, please and thank you gentle skin pod." - Tyler Taylor</p>
        )}
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
        <div className="interstitial" onClick={handleGlobalClick}>
          <img className="interimage" onClick={(e) => e.stopPropagation()} src={selectedArtwork.image} alt={selectedArtwork.title} />
        </div>
      )}
    </div>
  );
}

export default Favorites;