import {createStore} from "redux";
import Data from './Data';

const reducer = (state={data:Data, active:{}, bar:false, inventory:false, cart:[]}, action) => {
  switch (action.type) {
    case 'SHOW_BAR':
      return { ...state, bar: !state.bar };
    case 'SHOW_CART':
      return { ...state, inventory: !state.inventory };
    case 'SET_CART':
      return { 
        ...state, 
        cart :[
          ...state.cart, 
          {...action.payload
        }]
      };
    case 'REM_CART':
      return { ...state, cart: state.cart.filter(item => item !== action.payload)};
    case 'SET_ACTIVE':
      return { ...state, active: action.payload };
    default:
      return {...state}
  }
};


const store = createStore(reducer)

export default store
