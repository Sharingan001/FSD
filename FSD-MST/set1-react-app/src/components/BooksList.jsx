import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';
import '../App.css';

function BooksList() {
  return (
    <div className="books-container">
      <h2 className="title">Our Collection</h2>
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p className="book-author">by {book.author}</p>
            <div className="btn-container">
               <Link to={`/books/${book.id}`} className="book-details-btn">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
