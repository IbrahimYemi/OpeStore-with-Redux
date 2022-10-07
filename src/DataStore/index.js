import { createStore } from "redux";
import Data from "./Data";
const stateStore = {
  data: Data,
  active: {},
  cart: [],
};
const reducer = (state = stateStore, action) => {
  switch (action.type) {
    case "SET_CART":
      const exist = state.cart.find((x) => x.id === action.payload.id);
      if (exist) {
        alert("Product Already Selected");
        return {
          ...state,
        };
      } else {
        alert("Product Added To Cart");
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }
    case "REM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    case "SET_ACTIVE":
      return { ...state, active: action.payload };
    default:
      return { ...state };
  }
};

const store = createStore(reducer);

export default store;
