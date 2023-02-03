// we import constant file
import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

// data means product name and product price
// create action for add to cart
export const addtocart = (data) => {
  // console.log("Action", data);
  return {
    // type: "ADD_TO_CART", //without use constant file
    type: ADD_TO_CART, // using constant file
    data: data,
  };
};

// data for remove to product id
// create action for remove to cart
export const removetocart = () => {
  // console.log("Action", data);
  return {
    type: REMOVE_TO_CART,
  };
};
