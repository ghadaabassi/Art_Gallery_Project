import "./App.css";
import React, { useState, useEffect } from "react";
import InputWithLabel from "./components/InputWithLable";

// Dislaying the data from the api
function Artwork({ artwork }) {
  useEffect(() => {
    const fetchArtworkDetails = async () => {
      try {
        const response = await fetch(artwork.api_link);
        const { data } = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error("Error fetching artwork details:", error);
      }
    };

    fetchArtworkDetails();
  }, [artwork.api_link]);

  return (
    <div>
      <h2>{artwork.title}</h2>
      <p>Artist: {artwork.artist_display}</p>
      <p>Date: {artwork.date_display}</p>
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
        />
      )}
    </div>
  );
}

function App() {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setsearchTerm] = useState(
    localStorage.getItem("search") || "Art"
  );

  const API_ENDPOINT = "https://api.artic.edu/api/v1/artworks/search?q=";

  //update the search term
  const handleSearch = (event) => {
    setsearchTerm(event.target.value);
  };

  // update the fetched data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}${searchTerm}`);
        //const { data } = await response.json();
        //setArtworks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchTerm]);

  //update the search value in the localStorage
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  return (
    <>
      <h1>Artworks from the Art Institute of Chicago</h1>
      <div>
        {/*The Reusable Component*/}
        <InputWithLabel
          id="search"
          value={searchTerm}
          onInputChange={handleSearch}
        >
          <strong>Search an artwork :</strong>
        </InputWithLabel>

        {
          //Mapping the fetched data
          artworks.map((artwork) => (
            <Artwork key={artwork.id} artwork={artwork} />
          ))
        }
      </div>
    </>
  );
}

export default App;
