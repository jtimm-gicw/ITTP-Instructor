// Import the useState hook from React
// useState allows us to store and update data inside the component
import { useState } from 'react';
// Import axios so we can make HTTP requests to APIs
import axios from 'axios';
// Access the API key stored in the .env file
// import.meta.env is how Vite gives us access to environment variables
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  // State to store what the user types into the input field
  // searchQuery = current value
  // setSearchQuery = function used to update the value
  const [searchQuery, setSearchQuery] = useState('');

  // State to store the location data returned from the API
  // Starts as an empty object
  const [location, setLocation] = useState({});

  // Async function because API requests take time
  // async allows us to use await inside the function
  async function getLocation() {

    // Build the API URL using:
    // - the API key
    // - the city the user typed
    // - format=json so the API sends JSON data back
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

    // Send a GET request to the API
    // await pauses the function until the data comes back
    const response = await axios.get(API);

    // Store the first result from the API into state
    // response.data is an array of matching locations
    setLocation(response.data[0]);
  }

  return (
    <>
      {/* Input field where users type a city name */}
      <input
        // Runs every time the user types
        // Updates the searchQuery state with the input value
        onChange={(e) => setSearchQuery(e.target.value)}

        // Placeholder text shown before typing
        placeholder="search for a city"
      />

      {/* Button that runs the getLocation function when clicked */}
      <button onClick={getLocation}>
        Explore!
      </button>

      {/* Conditional rendering */}
      {/* Only display the h2 if location data exists */}
      {location.place_id &&

        // Display the city name returned from the API
        <h2>The city is: {location.display_name}</h2>
      }
    </>
  )
}

// Export the App component so it can be used in main.jsx
export default App;