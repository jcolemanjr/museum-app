import React from "react";

function Search({ setfilteredArtwork }) {
    return (
      <span className="pleaseWork">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            className="searchBar"
            onChange={(e) => setfilteredArtwork(e.target.value)}
          />
        </div>
      </span>
    );
}
export default Search;