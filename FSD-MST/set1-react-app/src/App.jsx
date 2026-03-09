import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import './App.css';

function NavLinks() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Book Store</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/books" className={location.pathname.startsWith('/books') ? 'active' : ''}>Books List</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavLinks />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
