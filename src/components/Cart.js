import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../style/cart.css';

class Cart extends React.Component {
  render() {
    return(
      <div className="Cart">
        <Header />
        <div className="cart-body">
          <div className="cart-left">
            <div className="cart-products"></div>
            <div className="cart-delivery"></div>
            <div className="cart-down">
              <div className="cart-payment"></div>
              <div className="cart-mydata"></div>
            </div>
          </div>
          <div className="cart-right"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart