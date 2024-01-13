import React, { useState } from 'react';
import Track from '../Track/Track';

const Playlist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [tracklist, setTracklist] = useState([]);

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSavePlaylist = () => {
    // Save the playlist logic goes here
    console.log('Playlist saved:', playlistName);
  };

  return (
    <div>
      <input
        type="text"
        value={playlistName}
        onChange={handlePlaylistNameChange}
        placeholder="Enter playlist name"
      />
      <ul>
        {tracklist.map((track, index) => (
          <Track key={index} track={track} />
        ))}
      </ul>
      <button onClick={handleSavePlaylist}>Save Playlist</button>
    </div>
  );
};

export default Playlist;
