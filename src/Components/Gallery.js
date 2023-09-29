import React, { useEffect, useState, useRef } from "react";
import Artwork from "./Artwork";
import Search from "./Search";

function Gallery({ artworks, setArtworks, setfavorites, favorites }) {
  useEffect(() => {
    const audio = document.querySelector(".firstAudio");
    audio.volume = 0.2;
  }, []);

  const [filteredArtwork, setfilteredArtwork] = useState("");
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

  useEffect(() => {
    fetch("http://localhost:3001/Favorites")
      .then((res) => res.json())
      .then((data) => setfavorites(data));
  }, []);

  const filteredArt = artworks.filter((art) => {
    return (
      art.title?.toLowerCase().includes(filteredArtwork.toLowerCase()) ||
      art.artist?.toLowerCase().includes(filteredArtwork.toLowerCase()) ||
      art.date?.toString().toLowerCase().includes(filteredArtwork.toLowerCase()) ||
      art.medium?.toLowerCase().includes(filteredArtwork.toLowerCase()) ||
      art.culture?.toLowerCase().includes(filteredArtwork.toLowerCase()) ||
      art.description?.toLowerCase().includes(filteredArtwork.toLowerCase())
    );
  });

  const addToFavorites = async (artwork) => {
    await fetch("http://localhost:3001/Favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artwork),
    })
    .then((res) => res.json())
    .then((data) => {
      setfavorites((prevFavorites) => [...prevFavorites, data]);
    });
  };

  const removeFromFavorites = async (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setfavorites(updatedFavorites);

    await fetch(`http://localhost:3001/Favorites/${id}`, {
      method: "DELETE",
    });
  };

  const artPiece = filteredArt.map((piece) => {
    const matchingFavorite = favorites.find(
      (fav) => fav.accessionNumber === piece.accessionNumber
    );

    return (
      <Artwork
        onClick={() => handleArtworkClick(piece)}
        key={`${piece.accessionNumber}${piece.image}`}
        artist={piece.artist}
        title={piece.title}
        image={piece.image}
        date={piece.date}
        medium={piece.medium}
        description={piece.description}
        accessionNumber={piece.accessionNumber}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isFavorite={!!matchingFavorite}
        id={matchingFavorite?.id}
      />
    );
  });

  return (
    <div>
      <audio
        className="firstAudio"
        src="/Assets/symphony2.mp3"
        type="audio/mpeg"
        autoPlay
        loop
      />
      <h1 className="galleryHeader">Gallery</h1>
      <Search setfilteredArtwork={setfilteredArtwork} />
      <div className="artpiece">{artPiece}</div>
      {selectedArtwork && (
        <div className="interstitial" onClick={handleGlobalClick}>
          <img className="interimage" onClick={(e) => e.stopPropagation()} src={selectedArtwork.image} alt={selectedArtwork.title} />
        </div>
      )}
    </div>
  );
}

export default Gallery;
