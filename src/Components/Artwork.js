import React from "react";

function Artwork( { artist, name, image, date, medium, description } ) {
    return (
        <div>
            <h1>{title}</h1>
            <img onClick={console.log("Works")} src={image} alt={`This is a photo of ${description}`} title={name} />
            <p>{date}</p>
            <p>{medium}</p>
            <p>{description}</p>
        </div>
    )
}


export default Artwork;