import React from "react";

function Artwork({
  isOnFavorites,
  onClick,
  artist,
  title,
  image,
  date,
  medium,
  description,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
  accessionNumber,
  id,
}) {
  // console.log(accessionNumber)

  function artistCheck() {
    if (artist === "") {
      return "Unknown Artist";
    } else {
      return artist;
    }
  }

  function descCheck() {
    if (description === "" || description === " ") {
      return `${title} ${artistCheck()} ${date}`;
    } else {
      return description;
    }
  }

  return (
    <div className="artwork">
      <h2>{title}</h2>
      <img
        onClick={() => {
          console.log("Works")
          onClick()
        }}
        src={image}
        alt={`This is a piece called ${descCheck()} by ${artistCheck()}`}
        title={`This is a piece called ${descCheck()} by ${artistCheck()}`}
      />
      <h3>Artist: {artistCheck()}</h3>
      <p>Date: {date}</p>
      <p>Medium: {medium}</p>
      <p>Description: {descCheck()}</p>
      {isFavorite || isOnFavorites ? (
        <button
          className="removeButton"
          onClick={() => removeFromFavorites(id)}
        >
          <span>Remove From Favorites</span>
        </button>
      ) : (
        <button
          className="addButton"
          onClick={() =>
            addToFavorites({
              title,
              artist,
              image,
              date,
              medium,
              description,
              accessionNumber,
            })
          }
        >
          <span>Add to Favorites</span>
        </button>
      )}
    </div>
  );
}

export default Artwork;
