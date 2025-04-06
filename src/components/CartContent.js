import React from "react";

class CartContent extends React.Component {
  render() {
    return(
      <div className="cart-body">
        <div className="cart-left">
          <div className="cart-products"></div>
            <div className="cart-delivery"></div>
            <div className="cart-down">
              <div className="cart-payment"></div>
              <div className="cart-data"></div>
            </div>
          </div>
        <div className="cart-right"></div>
      </div>
    );
  }
}

export default CartContent