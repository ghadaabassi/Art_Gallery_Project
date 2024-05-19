import React from "react";
import ".././styles/ArtCard.css";

const Artwork = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <h2>{artwork.title}</h2>
      <p>Artist: {artwork.artist_display}</p>
      <p>Date: {artwork.date_display}</p>
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
          className="artwork-image"
        />
      )}
    </div>
  );
};

export default Artwork;
