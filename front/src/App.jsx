import "./styles/ArtCard.css";
import React, { useState, useEffect } from "react";
import Artwork from "./components/ArtWork";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setsearchTerm] = useState(
    localStorage.getItem("search") || "Art"
  );

  const API = "https://api.artic.edu/api/v1/artworks";

  // update the fetched data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}`);
        const { data } = await response.json();
        setArtworks(data);
      } catch (error) {
        console.error("Error fetching search data:", error);
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
      <NavBar />
      <h1 className="textStyling">
        Artworks from the Art Institute of Chicago
      </h1>
      <div>
        {
          //Mapping the fetched data

          <div className="artwork-container">
            {artworks.map((artwork) => (
              <Artwork key={artwork.id} artwork={artwork} />
            ))}
          </div>
        }
      </div>
    </>
  );
}

export default App;

/*
import "./App.css";
import React, { useState, useEffect } from "react";
import InputWithLabel from "./components/InputWithLable";

// Dislaying the data from the api

function Artwork({ artwork }) {
  return (
    <div>
      <h2>{artwork.data.title}</h2>
      <p>Artist: {artwork.data.artist_display}</p>
      <p>Date: {artwork.date_display}</p>
      <p>Place of Origin: {artwork.data.place_of_origin}</p>
      <p>Dimensions: {artwork.data.dimensions}</p>
      {artwork.data.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`}
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
        const { data } = await response.json();

        const artworksData = [];

        for (const artwork of data) {
          try {
            const artworkResponse = await fetch(artwork.api_link);

            const artworkData = await artworkResponse.json();
            console.log("DATA:  " + artworkData.data.title);

            artworks.push(artworkData);
          } catch (error) {
            console.error("Error fetching artwork details:", error);
          }
        }
        // Set the state with the fetched artwork details
      } catch (error) {
        console.error("Error fetching search data:", error);
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
        {//The Reusable Component
        }
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
            //console.log(artwork);
            <Artwork key={artwork.id} artwork={artwork} />
          ))
        }
      </div>
    </>
  );
}

export default App;
*/
