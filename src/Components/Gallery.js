import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";
import Search from "./Search";

function Gallery({ artworks, setArtworks }) {
  const [favorites, setfavorites] = useState([]);
  const [filteredArtwork, setfilteredArtwork] = useState("");
//   console.log(filteredArtwork);

  useEffect(() => {
    // Fetch the initial state of favorites
    fetch('http://localhost:3000/Favorites')
      .then((res) => res.json())
      .then((data) => setfavorites(data));
  }, []);

  const filteredArt = artworks.filter((art) => {
    return (
      (art.title?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.artist?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.date?.toString()?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.medium?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.culture?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.description?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false)
    );
  });

  const addToFavorites = async (artwork) => {
    setfavorites([...favorites, artwork]);

    await fetch("http://localhost:3000/Favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artwork),
    });
  };

  const removeFromFavorites = async (artwork) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.accessionNumber !== artwork.accessionNumber
    );
    setfavorites(updatedFavorites);

    await fetch(`http://localhost:3000/Favorites/${artwork.accessionNumber}`, {
      method: "DELETE",
    });
  };

  //map goes here --- creating an Artwork component for each item
  const artPiece = filteredArt.map((piece) => {
    return (
      <Artwork
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
        isFavorite={favorites.some(
            (fav) => {
             console.log(fav.accessionNumber)
             return fav.accessionNumber === piece.accessionNumber}
        )}

          
        
        //maybe create a ternary for if item is on-display based on {piece.galleryInformation}
      />
    );
  });

  return (
    <div>
      <Search setfilteredArtwork={setfilteredArtwork} />
      <div>{artPiece}</div>
    </div>
  );
}

export default Gallery;
