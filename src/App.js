// App.js

import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import axios from 'axios';
import BookSearchForm from './components/BookSearchForm';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (searchResults) => {
    setBooks(searchResults);
    setSelectedBook(null); // Reset selected book when new search is made
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="app">
      <h1>Book Search</h1>
      <BookSearchForm onSearch={handleSearch} />
      <div className="content">
        <BookList books={books} onBookSelect={handleBookSelect} />
        {selectedBook && <Book book={selectedBook} />}
      </div>
    </div>
  );
}

export default App;
