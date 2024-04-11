// BookList.js

const BookList = ({ books, onBookSelect }) => {
    return (
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book" onClick={() => onBookSelect(book)}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book Cover" />
            <div>
              <h3>{book.volumeInfo.title}</h3>
              <p>By: {book.volumeInfo.authors?.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default BookList;