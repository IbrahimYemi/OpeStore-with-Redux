
import Data from './Data';

export const addToCart = (data)=>{
  return {
    type: "SET_CART",/*ADD TO CART*/
    payload: data
  }
} 

export const removeFromCart = (data)=>{
  return {
    type: "REM_CART", /*REMOVE FROM CART*/
    payload: data
  }
}

export const showCart = ()=>{
  return {
    type: "SHOW_CART" /*SHOW THE INVENTORY*/
  }
}

export const setActive = (data)=>{
  return {
    type: "SET_ACTIVE", /*SET ACTIVE PRODUCT*/
    payload: data
  }
} 

export const setBar = ()=>{
  return {
    type: "SHOW_BAR"
  }
}
