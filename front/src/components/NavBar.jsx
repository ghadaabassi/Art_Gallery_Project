import InputWithLabel from "./InputWithLable";
import React, { useState, useEffect } from "react";

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
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="https://www.artic.edu/collection">
            <img
              src="\src\assets\images\logo.png"
              alt="Logo"
              width="30"
              height="30"
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
              <strong>Search :</strong>
            </InputWithLabel>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
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
