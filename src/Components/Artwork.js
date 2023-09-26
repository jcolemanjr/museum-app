import React from "react";

function Artwork({ artist, title, image, date, medium, description }) {
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
    <div>
      <h1>{title}</h1>
      <img
        onClick={() => console.log("Works")}
        src={image}
        alt={`This is a piece called ${descCheck()} by ${artistCheck()}`}
        title={`This is a piece called ${descCheck()} by ${artistCheck()}`}
      />
      <h3>Artist: {artistCheck()}</h3>
      <p>Date: {date}</p>
      <p>Medium: {medium}</p>
      <p>Description: {descCheck()}</p>
    </div>
  );
}

export default Artwork;
