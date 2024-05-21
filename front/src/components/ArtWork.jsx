import React from "react";
import ".././styles/ArtCard.css";

const Artwork = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <h2 className="textStyling">{artwork.title}</h2>
      <p>
        <strong>Artist:</strong> {artwork.artist_display}
      </p>
      <p>
        <strong>Date:</strong> {artwork.date_display}
      </p>
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
