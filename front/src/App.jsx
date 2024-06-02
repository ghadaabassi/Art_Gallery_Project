import "./styles/ArtCard.css";
import "./styles/NavBar.css";
import React, { useState, useEffect } from "react";
import Artwork from "./components/ArtWork";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setsearchTerm] = useState(
    localStorage.getItem("search") || "Art"
  );

  const [isError, setError] = useState(false);
  const [resultCount, setResultCount] = useState(0);

  const API = "https://api.artic.edu/api/v1/artworks";

  const handleSearchResult = (event) => {
    const filtered = artworks.filter((a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResultCount(filtered.length);
    setArtworks(filtered);
  };

  // update the search term
  const handleSearch = (event) => {
    setsearchTerm(event.target.value);
  };

  // remove the item by clicking the button
  const handleRemoveArt = (item) => {
    const newStories = artworks.filter((story) => item.id !== story.id);
    setArtworks(newStories);
  };

  // update the fetched data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}`);
        const { data } = await response.json();
        setArtworks(data);
      } catch (error) {
        setError(true);
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
      <NavBar
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
        onSearch={handleSearchResult}
        resultCount={resultCount}
      />

      <h1 className="textStyling redHover redHover">
        Artworks from the Art Institute of Chicago
      </h1>
      <div>
        {isError && <p>Something went wrong ...</p>}

        <Artworks artworks={artworks} onRemoveItem={handleRemoveArt} />
      </div>
    </>
  );
}

const Artworks = ({ artworks, onRemoveItem }) => (
  <ul className="artwork-container">
    {/*Mapping the fetched data*/}
    {artworks.map((item) => (
      <Artwork key={item.id} artwork={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

export default App;
