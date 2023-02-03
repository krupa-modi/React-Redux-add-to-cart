import React from "react";

const Home = (props) => {
  // console.log("Header", props);
  // console.log("Home", props.cartData);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>
        Redux Project Add To Cart
      </h1>

      <div className="cart-add-wrapper">
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-db-gadgets360-800x600-1673019609.jpg" />
          </div>

          <div className="text-wrapper item">
            <h3>Redmi Note-12</h3>
            <p>
              <b>Price:</b> 20000 RS
            </p>
          </div>

          <button
            className="add-btn"
            onClick={() => {
              props.addToCartHandler({ price: 20000, name: "Redmi Note-12" });
            }}
          >
            Add To Cart
          </button>

          <button
            className="add-btn"
            onClick={() => {
              props.removeToCartHandler({});
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
