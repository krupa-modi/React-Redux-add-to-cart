// import constant.js file
import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

// create initialstate
const initialState = {
  cartData: [],
};
// create function and get action data
// const cartItem = (state = initialState, action) => {

// every time item show different
const cartItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("Reducer", action);
      // return { ...state, cartData: action.data };

      // every time item show diffrent
      return [...state, { cartData: action.data }];
    case REMOVE_TO_CART:
      state.pop();
      return [...state];
    default:
      return state;
  }
};

// export it
export default cartItem;
