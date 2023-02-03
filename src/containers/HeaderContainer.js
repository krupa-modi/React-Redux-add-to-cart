// import home and use in app
import Header from "../components/Header";

// import connect from react-redux to connection between react and redux
import { connect } from "react-redux";

// create mapstatetoprops object
const mapStateToProps = (state) => ({
  //   cartData: state,

  // make simplify
  //   cartData: state.cartItem.cartData,

  // every time item show different
  cartData: state.cartItem,
});

// create mapdispatchtoprops object
const mapDispatchToProps = () => ({});

// using connect for connection between react and redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export it
// export default Home;
