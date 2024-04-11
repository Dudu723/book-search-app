// BookSearchForm.js
import React, { useState } from 'react'; // Import useState from React
import axios from 'axios'; // Import axios library

const BookSearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      onSearch(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default BookSearchForm;
