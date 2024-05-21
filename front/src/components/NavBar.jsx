import InputWithLabel from "./InputWithLable";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for the navBar
import "../styles/NavBar.css";
import "../styles/ArtCard.css";

const NavBar = () => {
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setsearchTerm] = useState(
    localStorage.getItem("search") || "Art"
  );

  //update the search term
  const handleSearch = (event) => {
    setsearchTerm(event.target.value);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a
            className="navbar-brand textStyling redHover"
            href="https://www.artic.edu/collection"
            style={{ fontSize: "27px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="\src\assets\images\logo.png"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block"
              style={{ margin: "35px" }}
            />
            Art Gallery
          </a>
          <form className="form-inline">
            {/*The Reusable Component*/}
            <InputWithLabel
              id="search"
              value={searchTerm}
              onInputChange={handleSearch}
            >
              Search :
            </InputWithLabel>

            <button
              style={{ margin: "20px" }}
              className="btn-dark-red "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
