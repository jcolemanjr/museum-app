import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";

function Favorites({removeFromFavorites, favorites}) {
    

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map(artwork => (
                <Artwork 
                removeFromFavorites={removeFromFavorites}
                key={artwork.id}
                    isOnFavorites={true}
                {...artwork} 
                />
            ))}
        </div>
    )
}



export default Favorites;