import React from 'react';

const Track = ({ track }) => {
  const { title, artist } = track;

  return (
    <div>
      <h3>{title}</h3>
      <p>{artist}</p>
      <button>+</button>
    </div>
  );
};

export default Track;
