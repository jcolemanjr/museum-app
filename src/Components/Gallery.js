import React, { useState } from "react";
import Artwork from "./Artwork";
import Search from "./Search";

function Gallery({ artworks, setArtworks }) {

    const [filteredArtwork, setfilteredArtwork] = useState('')
    console.log(filteredArtwork)

    const filteredArt = artworks.filter((art) => {
        return (
            (art.title?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
            (art.artist?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
            (art.date?.toString()?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
            (art.medium?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
            (art.culture?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false) ||
            (art.description?.toLowerCase()?.includes(filteredArtwork.toLowerCase()) ?? false)

        )
    })



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
            //maybe create a ternary for if item is on-display based on {piece.galleryInformation}
            />
        )
    })

    return (
        <div>
            <Search setfilteredArtwork={setfilteredArtwork} />

            <div>{artPiece}</div>
        </div>
    )
}


export default Gallery;