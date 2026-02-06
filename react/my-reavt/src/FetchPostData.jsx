import React, { useState, useEffect } from 'react';

function FetchPostData() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse JSON data from the response
        const result = await response.json();
        
        // Set the fetched data to state
        setData(result);
      } catch (error) {
        // Handle any errors that occur during the fetch
        setError(error.message);
      } finally {
        // Set loading to false once data is fetched
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array means it runs once when the component mounts

  // Show a loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there was an error during the fetch
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchPostData;
