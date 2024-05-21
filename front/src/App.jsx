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
