import React from "react";

const Header = (props) => {
  // console.log("Home", props);
  //   console.log("Home", props.cartData);
  return (
    <>
      <div className="cart-add-wrapper">
        <div className="cart-wrapper"></div>
        <div className="add-to-cart">
          <span className="cart-count">{props.cartData.length}</span>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
        </div>
      </div>
    </>
  );
};

export default Header;
