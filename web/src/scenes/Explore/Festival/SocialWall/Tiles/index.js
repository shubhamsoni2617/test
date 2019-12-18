import React from 'react';

const Tiles = ({ src }) => {
  return (
    <div className="tile">
      <img src={src} alt="" />
    </div>
  );
};

export default Tiles;
