// Book.js

const Book = ({ book }) => {
    return (
      <div className="book-details">
        <h2>{book.volumeInfo.title}</h2>
        <p>By: {book.volumeInfo.authors?.join(', ')}</p>
        <p>Rating: {book.volumeInfo.averageRating || 'N/A'}</p>
        <p>Reviews: {book.volumeInfo.ratingsCount || 'N/A'}</p>
        <p>Description: {book.volumeInfo.description || 'No description available.'}</p>
      </div>
    );
  };

  export default Book;