import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";

function Favorites({removeFromFavorites, favorites}) {


    return (
        <div>
            <h1>Favorites</h1>
            {favorites.length < 1 && <p className="visitorNote">Add some artwork, bitch!</p>}  {/* <---- feature by Tyler Taylor*/}
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