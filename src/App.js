import React, { useState } from 'react';
import './CSS/style.css';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Body from './Components/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, { ...product }]);
  //   alert('added to inventory');
  // };

  // const removeCart = (product) => {
  //   setCart((current) => current.filter((item) => item !== product));
  // };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            caseSensitive={false}
            element={<Body />}
          />
          <Route
            exact
            path="/details"
            caseSensitive={false}
            element={<Details />}
          />
        </Routes>
      </Router>
    </div>
  );
}
