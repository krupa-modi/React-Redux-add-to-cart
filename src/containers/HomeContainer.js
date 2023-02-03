// import home and use in app
import Home from "../components/Home";

// import connect from react-redux to connection between react and redux
import { connect } from "react-redux";

// import action function
import { addtocart, removetocart } from "../redux/Actions/actions";

// create mapstatetoprops object
const mapStateToProps = (state) => ({
  //   cartData: state,

  // make simplify
  //   cartData: state.cartItem.cartData,

  // every time item show different
  cartData: state.cartItem,
});

// create mapdispatchtoprops object
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addtocart(data)),
  removeToCartHandler: (data) => dispatch(removetocart(data)),
});

// using connect for connection between react and redux
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export it
// export default Home;
