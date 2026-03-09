import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', margin: '40px', lineHeight: '1.6' }}>
      <h1 style={{ color: '#1f4e79' }}>Practical Test – Set 1</h1>

      <h2 style={{ color: '#333' }}>Task 1</h2>
      <p>Create a small web application for a <b>Book Store</b> with the following pages:</p>
      <ul>
        <li>Home</li>
        <li>Books List</li>
        <li>Book Details</li>
      </ul>
      <p>The navigation menu should allow users to move between pages without reloading the browser.
        Display at least 5 sample books. Clicking a book should show its details.</p>

      <h2 style={{ color: '#333' }}>Task 2</h2>
      <p>Build a small <b>shopping cart indicator</b>.</p>
      <ul>
        <li>A button called “Add Item”</li>
        <li>A component showing total items in the cart</li>
      </ul>
      <p>Clicking the button should increase the cart count and update the value in another component.</p>

      <h2 style={{ color: '#333' }}>Task 3</h2>
      <p>Create a <b>User Registration form</b> with:</p>
      <ul>
        <li>Name</li>
        <li>Email</li>
        <li>Password</li>
        <li>Confirm Password</li>
      </ul>
      <p>Email must be valid and password must be at least 6 characters. Show validation messages.</p>
    </div>
  );
}

export default App;
