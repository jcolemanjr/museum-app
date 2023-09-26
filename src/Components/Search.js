import React from "react";

function Search({ setfilteredArtwork }) {
    return (
        <div className="search">
            <input type="text" placeholder = "search" className="searchBar" onChange={(e) => setfilteredArtwork(e.target.value)} />
        </div>
    )
}
export default Search;