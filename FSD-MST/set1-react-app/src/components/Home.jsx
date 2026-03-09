import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Book Store</h1>
      <p>Discover your next great read from our carefully curated collection of literary masterpieces.</p>
      <Link to="/books" className="explore-btn">Explore Books</Link>
    </div>
  );
}

export default Home;
