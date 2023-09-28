import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";
import Search from "./Search";

function Gallery({ artworks, setArtworks, setfavorites, favorites }) {
  useEffect(() => {
    const audio = document.querySelector(".firstAudio");
    audio.volume = 0.2;
  }, []);

  // const [favorites, setfavorites] = useState([]);
  const [filteredArtwork, setfilteredArtwork] = useState("");
  //   console.log(filteredArtwork);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  useEffect(() => {
    // Fetch the initial state of favorites
    fetch("http://localhost:3001/Favorites")
      .then((res) => res.json())
      .then((data) => setfavorites(data));
  },[]);

  const filteredArt = artworks.filter((art) => {
    return ((art.title?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.artist?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.date?.toString()?.toLowerCase() ?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.medium?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.culture?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.description?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false)
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

  //map goes here --- creating an Artwork component for each item
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
      />
      <h1 className="galleryHeader">Gallery</h1>
      <Search setfilteredArtwork={setfilteredArtwork} />
      <div className="artpiece">{artPiece}</div>
      {selectedArtwork && (
        <div className="interstitial">
          <img className="interimage" onClick={() => setSelectedArtwork(null)} src={selectedArtwork.image} alt={selectedArtwork.title} />
        </div>
      )}
    </div>
  );
}

export default Gallery;
