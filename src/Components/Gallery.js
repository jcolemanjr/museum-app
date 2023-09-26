import React from "react";
import Artwork from "./Artwork";


function Gallery({ artworks, setArtworks }) {

    //map goes here --- creating an Artwork component for each item
    const artPiece = artworks.map((piece) => {
        return (
            <Artwork
                key={piece.accessionNumber}
                artist={piece.artist}
                title={piece.title}
                image={piece.image}
                date={piece.date}
                medium={piece.medium}
                description={piece.description}
            //maybe create a ternary for if item is on-display based on {piece.galleryInformation}
            />
        )
    })

    return (
        <div>{artPiece}</div>
    )
}


export default Gallery;