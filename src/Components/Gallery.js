import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";
import Search from "./Search";

function Gallery({ artworks, setArtworks, setfavorites, favorites }) {

  // const [favorites, setfavorites] = useState([]);
  const [filteredArtwork, setfilteredArtwork] = useState("");
  //   console.log(filteredArtwork);

  useEffect(() => {
    // Fetch the initial state of favorites
    fetch("http://localhost:3000/Favorites")
      .then((res) => res.json())
      .then((data) => setfavorites(data));
  }, []);

  const filteredArt = artworks.filter((art) => {
    return ((art.title?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.artist?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.date ?.toString() ?.toLowerCase() ?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.medium?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.culture?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
      (art.description ?.toLowerCase() ?.includes(filteredArtwork.toLowerCase()) ?? false)
    );
  });

  const addToFavorites = async (artwork) => {
    await fetch("http://localhost:3000/Favorites", {
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

    await fetch(`http://localhost:3000/Favorites/${id}`, {
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
      <h1>Here's some art, Bitch</h1>
      <Search setfilteredArtwork={setfilteredArtwork} />
      <div>{artPiece}</div>
    </div>
  );
}

export default Gallery;
