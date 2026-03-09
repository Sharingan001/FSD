import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import '../App.css';

function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-details-container">
        <h2>Book not found</h2>
        <Link to="/books" className="back-btn">← Back to Books List</Link>
      </div>
    );
  }

  return (
    <div className="book-details-container">
      <Link to="/books" className="back-btn">← Back to Books List</Link>
      <div className="detail-card">
        <h2>{book.title}</h2>
        <p className="author">by {book.author}</p>
        <span className="price">{book.price}</span>
        <p className="description">{book.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
