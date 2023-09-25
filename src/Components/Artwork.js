import React, { useState } from "react";

function Artwork( { artist, title, image, date, medium, description } ) {

    const [isartist, setisArtist] = useState(true)

    function artistCheck() {
        if (artist == "") {
            return "Unkown Artist"
        } else {
            return artist
        }
    }

    function descCheck() {
        if (description == "" || " ") {
            return `${title} ${artistCheck} ${date}`
        } else {
        return description
    }

    return (
        <div>
            <h1>{title}</h1>
            <img onClick={console.log("Works")} src={image} alt={`This is a piece called ${description} by ${artist}`} title={title} />
            <h2>{artistCheck}</h2>
            <p>{date}</p>
            <p>{medium}</p>
            <p>{descCheck}</p>
        </div>
    )}
}


export default Artwork;