import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Header from './Header';
import { IoMdEyeOff } from 'react-icons/io';
import '../CSS/Product_body.css';
import { Link } from 'react-router-dom';

export default function Body({ checkS }) {
const dispatch = useDispatch()
const Data = useSelector((state)=>state.data);

// setting individual product details information
const check = (product) => {
  dispatch({ type: 'SET_ACTIVE', payload: product })
  console.log(product)
};

  // link styling
  const linkStyle = {
    textDecoration: 'none',
    color: 'rgb(240, 129, 25)',
  };
  // data laoding
  const CARD = Data.map((product) => {
    return (
      <div className="cards" key={product.id}>
        <img
          src={product.image}
          alt={product.title}
          className="product_image"
        />
        <span className="product_details">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </span>

        <Link to="/details" style={linkStyle}>
          <button className="show_details" onClick={() => check(product)}>
            Check Out <IoMdEyeOff />
          </button>
        </Link>
      </div>
    );
  });

  // render method
  return (
    <>
      <Header />
      <div className="web_body">
        <h2>Featured Products</h2>
        <span className="highlight">
          this is where your fashion sense got more meaningful
        </span>
        <div className="display">{CARD}</div>
      </div>
    </>
  );
}
