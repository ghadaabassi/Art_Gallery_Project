# Art Gallery
The objective of this project is to create a multi-component React application that allows users to explore the diverse collection of artworks from the Art Institute of Chicago.
I.The Art Institute of Chicago's API 
The Art Institute of Chicago, established in 1879, is one of the oldest and largest art museums in the United States, located in Chicago, Illinois.
The Institute is popular for its vast collection of works from diverse periods and cultures, including notable works by Monet, Van Gogh, and Grant Wood.
The Art Institute of Chicago's API provides access to the institute's art collection data, including information on artworks, artists, and exhibitions. 
Data is accessible via HTTP requests and returned in JSON format. For this project, we used the endpoint that retrieves information about artworks.
II. Role of Each Component
App: The main component that manages the global state of the application and 
orchestrates other components.
NavBar: Component for the application's navigation bar, including search functionality 
and 3D visualization.
InputWithLabel: Reusable component for input fields with labels.
Artworks: Component responsible for fetching data from the API, filtering, and 
displaying a list of artworks.
Artwork: Reusable component that displays the details of an individual artwork and 
allows removal of artworks.
Flower: Reusable component that represents a 3D flower with rotating animation.
We used also:
CSS Stylesheets: App.css, ArtCard.css and NavBar.css to custom styles for the application.

