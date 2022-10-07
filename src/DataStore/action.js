import React from "react";

export const addToCart = (data) => {
  return {
    type: "SET_CART" /*ADD TO CART*/,
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: "REM_CART" /*REMOVE FROM CART*/,
    payload: data,
  };
};

export const setActive = (data) => {
  return {
    type: "SET_ACTIVE" /*SET ACTIVE PRODUCT*/,
    payload: data,
  };
};

