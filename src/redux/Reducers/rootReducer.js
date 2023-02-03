// we combine all reducer
import cartItem from "./reducer";

// we imort combinereducers from redux
import { combineReducers } from "redux";

// create rootreducer function
const rootReducer = combineReducers({
  cartItem,
});

// export it
export default rootReducer;
