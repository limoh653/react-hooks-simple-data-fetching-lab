import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Function to fetch the random dog image
    const fetchDogImage = async () => {
      try {
        // Send the fetch request to the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        // Update the state with the received image URL
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching the dog image:', error);
      }
    };

    // Call the function to fetch the dog image
    fetchDogImage();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h1>Random Dog Image</h1>
      {/* Show a loading message while waiting for the image to load */}
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
