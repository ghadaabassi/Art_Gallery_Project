import InputWithLabel from "./InputWithLable";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for the navBar
import "../styles/NavBar.css";

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
            className="navbar-brand textStyling"
            href="https://www.artic.edu/collection"
          >
            <img
              src="\src\assets\images\logo.png"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block align-top mr-2"
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

            <button className="btn-dark-red" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
