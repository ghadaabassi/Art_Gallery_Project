import InputWithLabel from "./InputWithLable";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";
import "../styles/ArtCard.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Flower from "./Flower";

const NavBar = ({ id, value, onInputChange, onSearch }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a
            className="navbar-brand textStyling"
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

          <div className="mt-4">
            <Canvas
              style={{
                height: "200px",
                padding: 0,
                margin: 0,
              }}
            >
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <pointLight position={[30, 30, 30]} />
              <group rotation={[Math.PI / 2, 6, 0]}>
                {" "}
                {/* Adjust rotation here */}
                <Flower />
              </group>
            </Canvas>
          </div>

          <div>
            {/*The Reusable Component*/}
            <InputWithLabel id={id} value={value} onInputChange={onInputChange}>
              Search :
            </InputWithLabel>

            <button
              style={{ margin: "20px" }}
              className="btn-dark-red "
              onClick={onSearch}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
