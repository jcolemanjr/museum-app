import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";

function Favorites({removeFromFavorites, favorites}) {



    //&& <--- is the logical AND operator. It's used to conditionally render the element on its right only if the condition on its left is true.


    return (
    <div>
        <div>
            <h1 className="favorites">Favorites</h1>
            </div>
        <div className ="artpiece">
            
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
    </div>
    )
}



export default Favorites;