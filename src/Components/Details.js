import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import {useSelector, useDispatch} from "react-redux";

export default function Details() {

  // call store redux
const item = useSelector((state)=>state.active);
const dispatch = useDispatch()

// use store redux
const addToCart = (product) => {
  dispatch({ type: 'SET_CART', payload: product })
  console.log(product)
};

  return (
    <div className="details">
      <div className="first_details">
        <img src={item.image} alt={item.title} className="product_details" />
        <span className="products">
          <p>NAME:{item.name}</p>
          <p>${item.price}</p>
        </span>
      </div>
      <div className="full_details">
        <div className="about_product">
          <p className="category">Category: {item.category}</p>
          <p>{item.product_desc}</p>
        </div>
        <button className="addItem" onClick={() => addToCart(item)}>
          Add To Cart <BsCart3 />
        </button>
      </div>
    </div>
  );
}
