import './App.css'
import React, { useState, useEffect } from 'react';
import InputWithLabel from './components/InputWithLable';




// Getting the data from the api
function Artwork({ artwork }) {
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
  const [searchTerm,setsearchTerm]= useState(localStorage.getItem('search') || 'Art');


    //update the search term
    const handleSearch=(event)=>{
      setsearchTerm(event.target.value);
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.artic.edu/api/v1/artworks');
                const { data } = await response.json();
                setArtworks(data);
                const count = data.length;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);



    //update the search value in the localStorage
useEffect(()=>
  {
  localStorage.setItem('search',searchTerm);
  },[searchTerm]
  )


    return (
        <>
            <h1>Artworks from the Art Institute of Chicago</h1>
            <div>
              {/*The Reusable Component*/}
              <InputWithLabel id="search"
                              value={searchTerm}
                              onInputChange={handleSearch}>
        <strong>Search an artwork :</strong></InputWithLabel>
            
                {
                //Mapping the fetched data
                artworks.map(
                artwork => (
                    <Artwork key={artwork.id} artwork={artwork} />
                ))}
            
            </div>
        </>
    );
}






export default App
