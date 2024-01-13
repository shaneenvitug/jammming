import React from 'react';

function SearchBar() {
  return (
    <div>
      {/* Add a search icon */}
      <input type="text" placeholder="Search for song, artists etc..." />
      <button>SEARCH</button>
    </div>
  );
}

export default SearchBar;